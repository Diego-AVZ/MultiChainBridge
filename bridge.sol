//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Bridge { 

    string public chainName;
    uint public chainId = 421614; 

    constructor(string memory chain){
        chainName = chain;
    }

    mapping(address => bool) public isWrapped;
    mapping(address => uint32) public addressToId;
    mapping(uint32 => address) public idToAddress;

    function deployNewToken(string memory x, string memory z, uint32 id) public {
        aERC20 token = new aERC20(x, z, 0, address(this));
        isWrapped[address(token)]= true;
        addressToId[address(token)] = id;
        idToAddress[id] = address(token);
    }

    function regToken(address token, uint32 id) public {
        isWrapped[address(token)]= true;
        addressToId[address(token)] = id;
        idToAddress[id] = address(token);
    }

    function changeId(uint32 actualId, uint32 newId) public {
        address token = idToAddress[actualId];
        addressToId[token] = newId;
        idToAddress[newId] = token;
        idToAddress[actualId] = address(0);
    }

    function getIsWrapped(address token) public view returns(bool){
        return isWrapped[token];
    }

    function mintTokens(address token, address user, uint amount) internal {
        uint decimals = aERC20(token).decimals();
        aERC20(token).mint(user, amount*(1**decimals));
    }

    function claimTokens(address token, address user, uint amount) internal {
        aERC20(token).transfer(user, amount);
    }

    function receiveTokens(uint32 tokenId, address user, uint amount) public {
        address token = idToAddress[tokenId];
        if(isWrapped[token]){
            mintTokens(token, user, amount);
        } else {
            claimTokens(token, user, amount);
        }
    } 

    struct Data{
        uint chainIdFrom;   //0
        uint chainIdTo;     //1
        address claimer;    //2
        uint32 tokenId;     //3
        uint256 amount;     //4
        bool completed;     //5
        uint32 orderId;     //6
        address sender;     //7
        uint blockId;       //8
        bool returned;      //9
    }

    uint public blockId;
    uint32 public orderId;
    Data[] public orders;

    mapping(uint => Data[]) public blockData;

    function newBlock() public{
        blockData[blockId] = orders;
        delete orders;
        blockId++;
        orderId = 0;
    }

    function ordersAvailable() public view returns(bool){
        if(orders.length > 0){
            return true;
        } else {
            return false;
        }
    }

    function getBlockData() public view returns(uint, Data[] memory){
        return (blockId-1, blockData[blockId-1]);
    }

    function setCompleted(uint _blockId, uint64 _orderId) public{
        blockData[_blockId][_orderId].completed = true;
    } 

    function burnTokens(uint32 tokenId, uint amount, address claimer, uint chainTo, address user) public {
        address token = idToAddress[tokenId];
        aERC20(token).transferFrom(msg.sender, address(this), amount);
        aERC20(token).burn(amount);
        Data memory data = Data(chainId, chainTo, claimer, tokenId, amount, false, orderId, user, blockId, false);
        orderId++;
        orders.push(data);
    }

    function depositTokens(uint32 tokenId, uint amount, address claimer, uint chainTo, address user) public {
        address token = idToAddress[tokenId];
        aERC20(token).transferFrom(msg.sender, address(this), amount);
        Data memory data = Data(chainId, chainTo, claimer, tokenId, amount, false, orderId, user, blockId, false);
        orderId++;
        orders.push(data);
    }

    function sendToken(uint32 tokenId, uint amount, address claimer, uint chainTo) public{
        address token = idToAddress[tokenId];
        if(isWrapped[token] == true){
            burnTokens(tokenId, amount, claimer, chainTo, msg.sender);
        } else {
            depositTokens(tokenId, amount, claimer, chainTo, msg.sender);
        }
    }

    function withdrawTokens() public {
        for(uint i = 0; i < blockData[blockId-1].length; i++){
            if(blockData[blockId-1][i].completed == false){
                address token = idToAddress[blockData[blockId-1][i].tokenId];
                aERC20(token).transfer(blockData[blockId-1][i].sender, blockData[blockId-1][i].amount);
            }
        }
    }

    function returnTokens(uint _blockId, uint32 _orderId) public {
        require(blockData[_blockId][_orderId].completed == false, "order completed");
        uint32 _tokenId = blockData[_blockId][_orderId].tokenId;
        address _sender = blockData[_blockId][_orderId].sender;
        uint _amount = blockData[_blockId][_orderId].amount;
        address token = idToAddress[_tokenId];
        blockData[_blockId][_orderId].returned = true;
        aERC20(token).transfer(_sender, _amount);
    }

}

contract aERC20 is ERC20, ERC20Burnable {

    address public bridgeContract;

    constructor(string memory name, string memory symbol, uint256 initialSupply, address bridge) ERC20(name, symbol) {
        bridgeContract = bridge;
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount)public {
        require(msg.sender == bridgeContract);
        _mint(to, amount);
    }

}


contract MainChainContract {

    struct Token {
        string name;
        string ticker;
        uint16 nDecimals;
        uint16[] nativeChainIds;
    }

    uint32 tId = 0;
    mapping(uint32 => Token) public tokens;

    function registerToken(
            string memory tName,
            string memory tick,
            uint16 decimals,
            uint16[] memory cIds
        ) public {
            Token memory token = Token(tName, tick, decimals, cIds);
            tId++;
            tokens[tId] = token;
    }

    uint16 cId = 0;
    mapping(uint16 => string) public idChain;
    mapping(string => uint16) public chainId;

    function addChain(string memory chain) public {
        require(chainId[chain] == 0, "chain already exists");
        cId++;
        chainId[chain] = cId;
        idChain[cId] = chain;
    }

    function getChain(string memory chain) public view returns(uint16){
        return chainId[chain];
    }
}
