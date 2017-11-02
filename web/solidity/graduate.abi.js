
define(function (require) {
  return [
    {
      "constant": false, "inputs": [{ "name": "email", "type": "string" }, { "name": "certificate", "type": "string" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
    }, {
      "constant": false, "inputs": [{ "name": "email", "type": "string" }], "name": "get", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "function"
    }, {
      "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
    }, {
      "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
    }, {
      "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event"
    }
  ];
});
