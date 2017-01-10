class SavingsAccount {
    private balance: number;
    private owner: string;
    private withdrawals: number = 0;

    constructor(initialBalance: number, owner: string) {
        this.balance = initialBalance;
        this.owner = owner;
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
    }
    withdraw(amount: number) {
        this.withdrawals = this.withdrawals + 1;
        if (this.withdrawals <= 3) {
            this.balance = this.balance - amount;
        } else {
            console.log("Sorry, you've exceed 3 withdrawals already!");
        }
    }
    checkBalance() {
        console.log(`${this.owner} account balance: $${this.balance}`);
    }   
}

let savingsAccount = new SavingsAccount(20, "Luis");
savingsAccount.checkBalance();
savingsAccount.deposit(40);
savingsAccount.checkBalance();
savingsAccount.withdraw(30);
savingsAccount.withdraw(30);
savingsAccount.withdraw(30);
savingsAccount.withdraw(30);
savingsAccount.checkBalance();