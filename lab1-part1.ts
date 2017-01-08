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
        console.log(`Your balance is $${this.balance}`);
    }
}

let checkingsAccount = new CheckingsAccount(20);
checkingsAccount.checkBalance();
checkingsAccount.deposit(40);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(30);
checkingsAccount.checkBalance();