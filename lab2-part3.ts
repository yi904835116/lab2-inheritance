class Account {
    private balance: number;
    private ownerName: string;

    constructor(initialBalance: number, ownerName: string) {
        this.balance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.balance -= amount;
    }

    checkBalance(): void {
        console.log("Owner: " + this.ownerName + ", cuurent balance: " + this.balance);
    }

}

class CheckingsAccount extends Account {
    constructor(initialBalance: number, ownerName: string) {
        super(initialBalance, ownerName);
    }
}

class SavingsAccount extends Account {
    private count: number = 0;

    constructor(initialBalance: number, ownerName: string) {
        super(initialBalance, ownerName);
    }

    withdraw(amount: number): void {
        this.count++;
        if (this.count > 3) {
            console.log("You can't withdraw more than 3 times");
        } else {
            super.withdraw(amount);
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