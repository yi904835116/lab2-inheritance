class Account {
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
        console.log(`Account balance: $${this.balance}`);
    }   
}

class CheckingsAccount extends Account {
    constructor(initialBalance: number) {
        super(initialBalance);
    }
}

class SavingsAccount extends Account {
    constructor(initialBalance: number) {
        super(initialBalance);
    }
}

console.log('Checkings account')
let checkingsAccount = new CheckingsAccount(20);
checkingsAccount.checkBalance();
checkingsAccount.deposit(40);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(30);
checkingsAccount.checkBalance();

console.log('\nSavings account')
let savingsAccount = new SavingsAccount(20);
savingsAccount.checkBalance();
savingsAccount.deposit(10);
savingsAccount.checkBalance();
savingsAccount.withdraw(15);
savingsAccount.checkBalance();