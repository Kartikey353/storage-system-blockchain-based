import web3 from './web3';
const address = '0x0fF6452b32E21c96e874B7d5A5bC74884fBD28FD';

const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "action",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "uploader",
          "type": "address"
        }
      ],
      "name": "FileUploadedEvent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "contractName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "getTotalFileCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_fileId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "getFileOf",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fileId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "fileHash",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "fileSize",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "fileType",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "fileName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "fileDes",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "uploadTime",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "uploader",
              "type": "address"
            }
          ],
          "internalType": "struct OurStorageDapp.File",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_fileHash",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_fileSize",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_fileType",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_fileName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_fileDescription",
          "type": "string"
        }
      ],
      "name": "uploadFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "deleteFileName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "deleteFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_des",
          "type": "string"
        }
      ],
      "name": "editFileDeatils",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

export default new web3.eth.Contract(abi, address);
