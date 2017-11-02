pragma solidity ^0.4.4;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract Graduate is Ownable {
  mapping (string => string) certificates;

  function issue(string email, string certificate) public onlyOwner {
    certificates[email] = certificate;
  }

  function get(string email) public returns (string) {
    return certificates[email];
  }
}
