class Account {
    name: string;
    accountNumber: number;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = () => {
        console.log("Você depositou dinheiro na sua conta");
    }

    withdraw = () => {
        console.log("Você sacou dinheiro da sua conta");
    }
}

const newAccount = new Account("Jhow", 1);
console.log(newAccount);

const newAccount2 = new Account("Jonh", 2);
newAccount2.deposit();