
define(function (require) {
  const abi = require('solidity/graduate.abi');
  const bin = require('solidity/graduate.bin');
  const web3 = require('lib/web3');
  const $ = require('jquery');

  console.log({
    abi, bin
  });

  function get() {
    const GraduateContract = web3.eth.contract(abi);
    const address = $('#contract-address').val();
    console.log({ address });
    const contractInstance = GraduateContract.at(address);
    return contractInstance;
  }

  function deploy() {
    const graduateContract = web3.eth.contract(abi);
    const contractInstance = graduateContract.new({
      from: web3.eth.accounts[0],
      data: bin,
      gas: '4000000'
    }, function (e, contract) {
      console.log({
        e, contract
      });

      if (e) {
        console.log("Error");
        console.log(e);
      } else if (typeof contract.address === 'undefined') {
        console.log('contract address is undefined');
        console.log(e);
      } else {
        console.log('Contract deploy success');
        console.log({
          e, contract
        })
      }
    });
  }

  return {
    get
  };
});
