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
        console.log("Your balance is $" + this.balance);
    };
    return CheckingsAccount;
}());
var checkingsAccount = new CheckingsAccount(20);
checkingsAccount.checkBalance();
checkingsAccount.deposit(40);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(30);
checkingsAccount.checkBalance();
