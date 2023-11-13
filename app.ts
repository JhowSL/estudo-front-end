// Herança
abstract class Account {
    name: string;
    accountNumber: number;
    balance: number = 0;

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

class PeopleAccount extends Account {
    doc_id: number;
    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Jhow', 10);
console.log(peopleAccount);

// Classes
/* class Admin extends Account {


    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);

    }

    getbalance = () => {
        console.log("Seu saldo é de: " + this.balance);
    }
}

const adminAccount: Admin = new Admin('Jhow', 1);
console.log(adminAccount);
const newAccount2 = new Account("Jonh", 2);
console.log(newAccount2); */