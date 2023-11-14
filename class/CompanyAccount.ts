// Importa a classe BankAccount do arquivo BankAccount.ts
import { BankAccount } from "./BankAccount";

// Define a classe CompanyAccount que estende (herda de) a classe BankAccount
// Isso significa que CompanyAccount tem todas as propriedades e métodos de BankAccount, além dos que define por si mesma
export class CompanyAccount extends BankAccount {
    // Define o construtor da classe, que é chamado quando uma nova instância da classe é criada
    // O construtor aceita dois argumentos: name (nome do titular da conta) e accountNumber (número da conta)
    constructor(name: string, accountNumber: number) {
        // Chama o construtor da classe pai (BankAccount) com os argumentos name e accountNumber
        super(name, accountNumber);
    }

    // Define um método getLoan que, quando chamado, imprime uma mensagem no console
    getLoan() {
        console.log("Você solicitou um empréstimo");
    }

    // Define um método deposit que, quando chamado, retorna o número 2
    // Este método é definido como uma arrow function
    deposit = (): number => {
        return 2;
    }
}