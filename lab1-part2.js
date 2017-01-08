var CheckingsAccount = (function () {
    function CheckingsAccount(initialBalance) {
        this.balance = initialBalance;
    }
    CheckingsAccount.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
    };
    CheckingsAccount.prototype.withdraw = function (amount) {
        this.balance = this.balance - amount;
    };
    CheckingsAccount.prototype.checkBalance = function () {
        console.log("Checkings account balance: $" + this.balance);
    };
    return CheckingsAccount;
}());
var SavingsAccount = (function () {
    function SavingsAccount(initialBalance) {
        this.balance = initialBalance;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        this.balance = this.balance - amount;
    };
    SavingsAccount.prototype.checkBalance = function () {
        console.log("Savings account balance: $" + this.balance);
    };
    return SavingsAccount;
}());
var checkingsAccount = new CheckingsAccount(20);
checkingsAccount.checkBalance();
checkingsAccount.deposit(40);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(30);
checkingsAccount.checkBalance();
var savingsAccount = new SavingsAccount(20);
savingsAccount.checkBalance();
savingsAccount.deposit(10);
savingsAccount.checkBalance();
savingsAccount.withdraw(15);
savingsAccount.checkBalance();
