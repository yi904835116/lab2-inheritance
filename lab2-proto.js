'use strict';

// create an object literal for account which automatically clones Object.prototype and extends it
var account = {
  deposit: function(amount){
    this.balance = this.balance + amount;
  },
  withdraw: function(amount){
    if(this.balance - amount >= 0){
      this.balance = this.balance - amount;
    } else {
      console.log('You cannot withdraw that much');
    }
    
  },
  checkBalance: function(amount){
    console.log(`${this.owner} account balance: $${this.balance}`);
  }
}

console.log('Checkings Account');
// create a new checkingsAccount object by using account object as the proto
var checkingsAccount = Object.create(account);

// give the account an owner and a balance
checkingsAccount.owner = "Ethan";
checkingsAccount.balance = 20;

checkingsAccount.checkBalance();
checkingsAccount.deposit(40);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(30);
checkingsAccount.checkBalance();

console.log('\nSavings account');

// create a savingsAccount object by using account object as the proto
var savingsAccount = Object.create(account);
savingsAccount.withdrawals = 0;

savingsAccount.withdraw = function(amount){
  if (this.withdrawals < 3 && this.balance - amount >= 0) {
    this.withdrawals = this.withdrawals + 1;
    this.balance = this.balance - amount;
  } else {
    console.log("Sorry, you've exceed 3 withdrawals already!");
  }
}

savingsAccount.owner = "Ethan";
savingsAccount.balance = 20;


savingsAccount.checkBalance();
savingsAccount.deposit(10);
savingsAccount.checkBalance();
savingsAccount.withdraw(15);
savingsAccount.withdraw(15);
savingsAccount.withdraw(15);
savingsAccount.withdraw(15);

savingsAccount.checkBalance();
