class Account {
     balance: number;
     owner: string;

    constructor(initialBalance: number, owner: string) {
        this.balance = initialBalance;
        this.owner = owner;
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
    }
    withdraw(amount: number) {
        this.balance = this.balance - amount;
    }
    checkBalance() {
        console.log(`${this.owner} account balance: $${this.balance}`);
    }   
}

class CheckingsAccount extends Account {
    constructor(initialBalance: number, owner: string) {
        super(initialBalance, owner);
    }
}

class SavingsAccount extends Account {
    private withdrawals: number = 0;
    constructor(initialBalance: number, owner: string) {
        super(initialBalance, owner);
    }
    withdraw(amount: number) {
        if (this.withdrawals <= 3) {
            this.withdrawals = this.withdrawals + 1;
            this.balance = this.balance - amount;
        } else {
            console.log("Sorry, you've exceed 3 withdrawals already!");
        }
    }
}

console.log('Checkings account')
let checkingsAccount = new CheckingsAccount(20, "Luis");
checkingsAccount.checkBalance();
checkingsAccount.deposit(40);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(30);
checkingsAccount.checkBalance();

console.log('\nSavings account')
let savingsAccount = new SavingsAccount(20, "Luis");
savingsAccount.checkBalance();
savingsAccount.deposit(10);
savingsAccount.checkBalance();
savingsAccount.withdraw(15);
savingsAccount.withdraw(15);
savingsAccount.withdraw(15);
savingsAccount.withdraw(15);

savingsAccount.checkBalance();