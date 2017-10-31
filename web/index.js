
function voteForCandidate() {
  candidateName = $("#candidate").val();
  contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
    let div_id = candidates[candidateName];
    contractInstance.totalVotesFor.call(candidateName, (err, name) => {
      console.log("Total votes for callback");
      if (err) {
        console.log(err);
      } else {
        console.log(name);
        $("#" + div_id).html(name.toString());
      }
    })
  });
}


window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    console.log("Use metamask");
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log("Not Use metamask");
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  web3 = new Web3(web3.currentProvider || provider);
  abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
  VotingContract = web3.eth.contract(abi);
  // In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
  contractInstance = VotingContract.at('0x89bd4f2db43aad2e62fe4500a9cb7bd12aed2853');
  candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

  $(document).ready(function() {
    candidateNames = Object.keys(candidates);
    for (var i = 0; i < candidateNames.length; i++) {
      let name = candidateNames[i];
      contractInstance.totalVotesFor.call(name, (err, totalVotes) => {
        console.log("Total votes for callback");
        if (err) {
          console.log(err);
        } else {
          console.log(totalVotes);
          $("#" + candidates[name]).html(totalVotes.toString());
        }
      });
    }
  });
});
