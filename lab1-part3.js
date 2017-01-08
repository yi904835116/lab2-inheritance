var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Account = (function () {
    function Account(initialBalance) {
        this.balance = initialBalance;
    }
    Account.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
    };
    Account.prototype.withdraw = function (amount) {
        this.balance = this.balance - amount;
    };
    Account.prototype.checkBalance = function () {
        console.log("Account balance: $" + this.balance);
    };
    return Account;
}());
var CheckingsAccount = (function (_super) {
    __extends(CheckingsAccount, _super);
    function CheckingsAccount(initialBalance) {
        return _super.call(this, initialBalance) || this;
    }
    return CheckingsAccount;
}(Account));
var SavingsAccount = (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(initialBalance) {
        return _super.call(this, initialBalance) || this;
    }
    return SavingsAccount;
}(Account));
console.log('Checkings account');
var checkingsAccount = new CheckingsAccount(20);
checkingsAccount.checkBalance();
checkingsAccount.deposit(40);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(30);
checkingsAccount.checkBalance();
console.log('\nSavings account');
var savingsAccount = new SavingsAccount(20);
savingsAccount.checkBalance();
savingsAccount.deposit(10);
savingsAccount.checkBalance();
savingsAccount.withdraw(15);
savingsAccount.checkBalance();
