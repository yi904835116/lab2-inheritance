class CheckingsAccount{
    private balance: number;
    private ownerName: string;
    
    constructor(initialBalance:number,ownerName:string){
        this.balance = initialBalance;
        this.ownerName = ownerName;
    }

    deposite(amount:number):void {
        this.balance += amount;
    }

    withdraw(amount:number):void{
        this.balance -=amount;
    }

    checkBalance():void{
        console.log("Owner: " + this.ownerName + ", cuurent balance: " + this.balance);
    }
}

let Patrick = new CheckingsAccount(1000,"Patrick");
Patrick.deposite(500);
Patrick.withdraw(500);
Patrick.checkBalance();