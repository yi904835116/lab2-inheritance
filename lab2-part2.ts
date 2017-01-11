class SavingsAccount {
    private balance: number;
    private ownerName: string;
    private count: number;

    constructor(initialBalance: number, ownerName: string) {
        this.balance = initialBalance;
        this.ownerName = ownerName;
        this.count = 0;
    }

    deposite(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.count++;
        if(this.count  > 3){
            console.log("You can't withdraw more than 3 times");
        }else{
        this.balance -= amount;
        }
    }

    checkBalance(): void {
        console.log("Owner: " + this.ownerName + ", cuurent balance: " + this.balance);
    }
}

let Danny = new SavingsAccount(1000,"Danny");
Danny.deposite(500);
Danny.withdraw(100);
Danny.withdraw(100);
Danny.withdraw(100);
Danny.withdraw(100);
Danny.checkBalance();