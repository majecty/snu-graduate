

define(function (require) {
  if (window.web3) {
    console.log("Use metamask");
  } else {
    console.log("Use http");
  }
  const web3 = window.web3;
  const Web3 = window.Web3;

  const prevProvider = web3 && web3.currentProvider;
  const provider = prevProvider || new Web3.providers.HttpProvider("http://localhost:8545");
  // const provider = new Web3.providers.HttpProvider("http://localhost:8545");
  return new Web3(provider);
});
