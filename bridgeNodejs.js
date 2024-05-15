const { Web3 } = require('web3');
const prov1 = "https://eth-sepolia.g.alchemy.com/v2/byFxF8iaf6eK-3Hl7Pc_rfKPzLQ5PgHk";//"https://sepolia.infura.io/v3/2923582648284f7cb8f00d7046e469dd";
const prov2 = "https://arbitrum-sepolia.infura.io/v3/2923582648284f7cb8f00d7046e469dd";
const myAddress = "0x85dEee2d87C40DcD459A07EBa7371bf535435b52";
const prvKey = "5f0a23a7629a71d49261db38dd2c30c00468995723b215e5dce6111a9ad65d6b";
const w1 = new Web3(prov1);
const w2 = new Web3(prov2);
const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "chain",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_block",
		"outputs": [
			{
				"internalType": "string",
				"name": "chainIdFrom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "chainIdTo",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "claimer",
				"type": "address"
			},
			{
				"internalType": "uint32",
				"name": "tokenId",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "completed",
				"type": "bool"
			},
			{
				"internalType": "uint32",
				"name": "dataId",
				"type": "uint32"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToId",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "blockData",
		"outputs": [
			{
				"internalType": "string",
				"name": "chainIdFrom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "chainIdTo",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "claimer",
				"type": "address"
			},
			{
				"internalType": "uint32",
				"name": "tokenId",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "completed",
				"type": "bool"
			},
			{
				"internalType": "uint32",
				"name": "dataId",
				"type": "uint32"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "blockId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "tokenId",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "claimer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "chainTo",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "burnTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "chainId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "actualId",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "newId",
				"type": "uint32"
			}
		],
		"name": "changeId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dataId",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "x",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "z",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "id",
				"type": "uint32"
			}
		],
		"name": "deployNewToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "tokenId",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "claimer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "chainTo",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "depositTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBlockData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "chainIdFrom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "chainIdTo",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"internalType": "uint32",
						"name": "tokenId",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "completed",
						"type": "bool"
					},
					{
						"internalType": "uint32",
						"name": "dataId",
						"type": "uint32"
					},
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					}
				],
				"internalType": "struct A.Data[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "getIsWrapped",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"name": "idToAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isWrapped",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "newBlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "tokenId",
				"type": "uint32"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "receiveTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint32",
				"name": "id",
				"type": "uint32"
			}
		],
		"name": "regToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "tokenId",
				"type": "uint32"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "returnTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "tokenId",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "claimer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "chainTo",
				"type": "string"
			}
		],
		"name": "sendToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "i",
				"type": "uint64"
			}
		],
		"name": "setCompleted",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// CHAIN_A Sepolia
const sepolia = "0x86c251FE31dbE9BAe2c17EDC4a3704d74eA647B3";
const A = new w1.eth.Contract(ABI, sepolia);

// CHAIN_B arbSepolia
const arbSepolia = "0x3E4E0684439947c25D5F27FBB8C2bdF48c06E6D7";
const B = new w2.eth.Contract(ABI, arbSepolia);

var blockData = []; // Array to .push() every data from all the contracts. A global Array with DATA:
/*
struct Data{
        string chainIdFrom; //0
        string chainIdTo;   //1
        address claimer;    //2
        uint32 tokenId;     //3
        uint256 amount;     //4
        bool completed;     //5
        uint32 dataId;      //6
        address sender;     //7
    }
*/

async function sendTokens(amount, addressTo, chainToId){ //from SEPOLIA
    try{
		var order = A.methods.sendToken(1, amount, addressTo, chainToId); // tokenID == 1, 
		var _nonce = await w1.eth.getTransactionCount(myAddress);
		var Tx = {
			from: myAddress,
			to: arbSepolia,
			nonce : _nonce,
			gasLimit: 2100000,
			gasPrice: 4500000000,
			data: order
		}
		var signedTx = await w1.eth.accounts.signTransaction(Tx, prvKey);
		console.log("signedTX => " + signedTx);
	} catch(error){
        console.error("Error getBlockData1:", error);
    }
}

async function getBlockData1(){ // dataOrders from SEPOLIA
    try{
		var data = await A.methods.getBlockData().call();
		//data[0] == length of the block[] in chain_A
		//data[1] == dataStruct of the block in chain_A
		blockData.push(data[1]);
	} catch(error){
        console.error("Error getBlockData1:", error);
    }
}

async function getBlockData2(){ //dataOrders from ARBITRUM_SEPOLIA
    try{
		var data = await B.methods.getBlockData().call();
		blockData.push(data[1]);
	} catch(error){
        console.error("Error:", error);
    }
}

async function bridge(){
    try{
		for(var i = 0; i < blockData.length; i++){
			if(blockData[0][i][1] == "arbSepolia"){ //If order want to send tokens to arbSepolia
				console.log("ARBSepolia DETECTED");
				var data = B.methods.receiveTokens(blockData[0][i][3], blockData[0][i][2], blockData[0][i][4]).encodeABI();
				console.log("data in ARB ___ DETECTED");
				var _nonce = await w2.eth.getTransactionCount(myAddress);
				console.log("_nonce ARB DETECTED " + _nonce);
				var Tx = {
					from: myAddress,
					to: arbSepolia,
					nonce : _nonce,
					gasLimit: 2100000,
					gasPrice: 4500000000,
					data: data
				}
				var signedTx = await w2.eth.accounts.signTransaction(Tx, prvKey);
				console.log("Signed transaction: ", signedTx);
				var txReceipt = await w2.eth.sendSignedTransaction(signedTx.rawTransaction);
				console.log("Transaction receipt: ", txReceipt);
				var chainId = "sepolia";// await X.methods.getChain(blockData[i][0]).call(); // call to Main contract
				//controlTxs(chainId, txReceipt.status); // didnt works yet
			} else if (blockData[0][i][1] == "sepolia"){ //If order want to send tokens to Sepolia
				var data = A.methods.receiveTokens(blockData[0][i][3], blockData[0][i][2], blockData[0][i][4]).encodeABI();
				var _nonce = await w1.eth.getTransactionCount(myAddress);
				var Tx = {
					from: myAddress,
					to: sepolia,
					nonce : _nonce,
					gasLimit: 2100000,
					gasPrice: 4500000000,
					data: data
				}
				var signedTx = await w1.eth.accounts.signTransaction(Tx, prvKey);
				console.log("Signed transaction: ", signedTx);
				var txReceipt = await w1.eth.sendSignedTransaction(signedTx.rawTransaction);
				console.log("Transaction receipt: ", txReceipt);
				var chainId = "arbSepolia";
				// controlTxs(chainId, txReceipt.status);
			}
			blockData = []; // Delete blockData array for the next block
		}
	} catch(error){
		console.error("Error:", error);
	}
}

/* 
function getContract(x){
	console.log("get contract IN... " + x);
	if(x == "sepolia"){
		return A, w1, sepolia;
	} else if(x == 2){
		return B, w2, arbSepolia; 
	}
}

async function controlTxs(chainId, x){
	try{
		var contract = getContract(chainId)[0];
		console.log("Contract is..." + contract);
		var wIns = getContract(chainId)[1];
		var conAdd = getContract(chainId)[2];
			if (x == 1) {
				console.log("La transacción se ha completado exitosamente en la blockchain.");
				var nonceComplet = await wIns.eth.getTransactionCount(myAddress);
				var completedData = contract.methods.setCompleted(blockData[i][6]).encodeABI();
				var txCompleted = {
					from: myAddress,
					to: conAdd,
					nonce : nonceComplet,
					gasLimit: 2100000,
					gasPrice: 4500000000,
					data: completedData
				}
				var signedTxC = await wIns.eth.accounts.signTransaction(txCompleted, prvKey);
				var txReceiptC = await wIns.eth.sendSignedTransaction(signedTxC.rawTransaction);
				console.log(txReceiptC);
			} else {
				console.log("La transacción no se ha completado");
				var nonceReturn = await wIns.eth.getTransactionCount(myAddress);
				var returnData = contract.methods.returnTokens(blockData[i][3], blockData[i][7], blockData[i][4]).encodeABI();
				var txReturn = {
					from: myAddress,
					to: conAdd,
					nonce : nonceReturn,
					gasLimit: 2100000,
					gasPrice: 4500000000,
					data: returnData
				}
				var signedTxR = await wIns.eth.accounts.signTransaction(txReturn, prvKey);
				var txReceiptR = await wIns.eth.sendSignedTransaction(signedTxR.rawTransaction);
				console.log(txReceiptR);
			}
	} catch(error){
		console.log(error);
	}
}
*/

async function readAndSend(){
	try{
		await getBlockData1();
		await getBlockData2()
		await bridge();
	} catch(error){
		console.error("Error readAndSend(): ", error);
	}
}

async function createBlocks1(){
    try{
		var send = A.methods.newBlock().encodeABI(); // It creates a new block in chain_A
		var _nonce = await w1.eth.getTransactionCount(myAddress);
		console.log("nonce Blockch1 ..."+ _nonce)
		var Tx = {
			from: myAddress,
			to: sepolia,
			nonce : _nonce,
			gasLimit: 2100000,
			gasPrice: 4500000000,
			data: send
		}
		var signedTx = await w1.eth.accounts.signTransaction(Tx, prvKey);
		var txReceipt = await w1.eth.sendSignedTransaction(signedTx.rawTransaction);
		console.log("CreateBlocks1 DONE");
	} catch(error){
        console.error("Error createBlocks1():", error);
    }
}

async function createBlocks2(){
    try{
		var send = B.methods.newBlock().encodeABI(); // It creates a new block in chain_B
		var _nonce = await w2.eth.getTransactionCount(myAddress);
		var Tx = {
			from: myAddress,
			to: arbSepolia,
			nonce : _nonce,
			gasLimit: 2100000,
			gasPrice: 4500000000,
			data: send
		}
		var signedTx = await w2.eth.accounts.signTransaction(Tx, prvKey);
		var txReceipt = await w2.eth.sendSignedTransaction(signedTx.rawTransaction);
		console.log("CreateBlocks2 DONE");
	} catch(error){
        console.error("Error createBlocks2():", error);
    }
}

var counter = 0;

async function time(){
	try{
		counter++;
		console.log("TIME IS = " + counter)
		if(counter == 30){ // Every 30 seconds it creates new blocks and read data to send tokens to other chains
			counter = 0;
			clearInterval(int1);
			await createBlocks1();
			await createBlocks2();
			await readAndSend();
			int1 = setInterval(time, 1000);
		}
	} catch(error){
        console.error("Error:", error);
    }
}

var int1 = setInterval(time, 1000);