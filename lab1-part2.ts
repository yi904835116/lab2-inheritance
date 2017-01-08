class CheckingsAccount {
    balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
    }
    withdraw(amount: number) {
        this.balance = this.balance - amount;
    }
    checkBalance() {
        console.log(`Checkings account balance: $${this.balance}`);
    }
}

class SavingsAccount {
    balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
    }
    withdraw(amount: number) {
        this.balance = this.balance - amount;
    }
    checkBalance() {
        console.log(`Savings account balance: $${this.balance}`);
    }
}

let checkingsAccount = new CheckingsAccount(20);
checkingsAccount.checkBalance();
checkingsAccount.deposit(40);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(30);
checkingsAccount.checkBalance();

let savingsAccount = new SavingsAccount(20);
savingsAccount.checkBalance();
savingsAccount.deposit(10);
savingsAccount.checkBalance();
savingsAccount.withdraw(15);
savingsAccount.checkBalance();