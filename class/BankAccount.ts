// Classe abstrata BankAccount que representa uma conta bancária genérica
export abstract class BankAccount {
    name: string; // Nome do titular da conta
    accountNumber: number; // Número da conta
    balance: number = 0; // Saldo da conta, inicializado como 0

    // Construtor da classe
    constructor(name: string, accountNumber: number) {
        this.name = name; // Define o nome do titular da conta
        this.accountNumber = accountNumber; // Define o número da conta
    }

    // Método para depositar dinheiro na conta
    deposit = () => {
        console.log("Você depositou dinheiro na sua conta");
    }

    // Método para sacar dinheiro da conta
    withdraw = () => {
        console.log("Você sacou dinheiro da sua conta");
    }

    // Método para obter o saldo da conta
    getBalance = () => {
        console.log(this.balance);
    }
}