
define(function (require) {
  const abi = require('solidity/graduate.abi');
  const bin = require('solidity/graduate.bin');
  const web3 = require('lib/web3');

  console.log({
    abi, bin
  });

  const graduateContract = web3.eth.contract(abi);
  graduateContract.new({
    from: web3.eth.accounts[0],
    data: bin,
    gas: '4000000'
  }, function (e, contract) {
    console.log({
      e, contract
    });

    if (e) {
      console.error("Error");
      console.error(e);
    } else if (typeof contract.address === 'undefined') {
      console.error('contract address is undefined');
      console.error(e);
    } else {
      console.log('Contract deploy success');
      console.log({
        e, contract
      })
    }
  });
});
