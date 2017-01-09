class CheckingsAccount {
    private balance: number;
    private owner: string;

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

let checkingsAccount = new CheckingsAccount(20, "Luis");
checkingsAccount.checkBalance();
checkingsAccount.deposit(40);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(30);
checkingsAccount.checkBalance();