// Importa a classe BankAccount do arquivo BankAccount.ts
import { BankAccount } from "./BankAccount";

// Define a classe PeopleAccount que estende (herda de) a classe BankAccount
// Isso significa que PeopleAccount tem todas as propriedades e métodos de BankAccount, além dos que define por si mesma
export class PeopleAccount extends BankAccount {
    // Define uma propriedade doc_id para armazenar o ID do documento da pessoa
    doc_id: number;

    // Define o construtor da classe, que é chamado quando uma nova instância da classe é criada
    // O construtor aceita três argumentos: doc_id (ID do documento da pessoa), name (nome do titular da conta) e accountNumber (número da conta)
    constructor(doc_id: number, name: string, accountNumber: number) {
        // Chama o construtor da classe pai (BankAccount) com os argumentos name e accountNumber
        super(name, accountNumber);
        // Define a propriedade doc_id da instância com o valor do argumento doc_id
        this.doc_id = doc_id;
    }
}