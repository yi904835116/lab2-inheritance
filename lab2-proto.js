// prototypal inheritance walkthrough code goes here

'use strict';

// create an object literal for account which automatically clones Object.prototype and extends it
var Account = {
  // notice the lack of a constructor 
  deposit: function (amount) {
    this.balance = this.balance + amount;
  },
  withdraw: function (amount) {
    this.balance = this.balance - amount;
  },
  checkBalance: function (amount) {
    console.log(`${this.owner} account balance: $${this.balance}`);
  }
}



// create a new Account object by using account object as the proto
let account = Object.create(Account);

// give the account an owner and a balance (since we can't have a constructor with this syntax)
account.owner = "Ethan";
account.balance = 20;

account.checkBalance();
account.deposit(40);
account.checkBalance();
account.withdraw(30);
account.checkBalance();

