Projeto de Banco
================

Este é um projeto simples de um sistema bancário em TypeScript, composto por três tipos de contas: `PeopleAccount`, `CompanyAccount`, e uma classe genérica `BankAccount`. O código está dividido em três arquivos: `app.ts`, `PeopleAccount.ts`, `CompanyAccount.ts`, e `BankAccount.ts`. Abaixo está uma descrição de cada parte do projeto.

`app.ts`
--------

typescript

```typescript
// Importa as classes BankAccount, PeopleAccount e CompanyAccount dos respectivos arquivos
import { BankAccount } from './class/BankAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';

// Cria uma nova instância da classe PeopleAccount, representando uma conta de pessoa física
// O construtor da classe PeopleAccount é chamado com os argumentos: 1 (número da conta), 'Jhow' (nome do titular) e 10 (saldo inicial)
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Jhow', 10);

// Imprime a instância da conta de pessoa física no console
console.log(peopleAccount);

// Chama o método de depósito na conta de pessoa física
peopleAccount.deposit();
```

`PeopleAccount.ts`
------------------

typescript

```typescript
// Importa a classe BankAccount do arquivo BankAccount.ts
import { BankAccount } from "./BankAccount";

// Define a classe PeopleAccount que estende (herda de) a classe BankAccount
export class PeopleAccount extends BankAccount {
    // Define uma propriedade doc_id para armazenar o ID do documento da pessoa
    doc_id: number;

    // Define o construtor da classe
    constructor(doc_id: number, name: string, accountNumber: number) {
        // Chama o construtor da classe pai (BankAccount) com os argumentos name e accountNumber
        super(name, accountNumber);
        // Define a propriedade doc_id da instância com o valor do argumento doc_id
        this.doc_id = doc_id;
    }
}
```

`CompanyAccount.ts`
-------------------

typescript

```typescript
// Importa a classe BankAccount do arquivo BankAccount.ts
import { BankAccount } from "./BankAccount";

// Define a classe CompanyAccount que estende (herda de) a classe BankAccount
export class CompanyAccount extends BankAccount {
    // Define o construtor da classe
    constructor(name: string, accountNumber: number) {
        // Chama o construtor da classe pai (BankAccount) com os argumentos name e accountNumber
        super(name, accountNumber);
    }

    // Define um método getLoan que, quando chamado, imprime uma mensagem no console
    getLoan() {
        console.log("Você solicitou um empréstimo");
    }

    // Define um método deposit que, quando chamado, retorna o número 2
    deposit = (): number => {
        return 2;
    }
}
```

`BankAccount.ts`
----------------

typescript

```typescript
// Classe abstrata BankAccount que representa uma conta bancária genérica
export abstract class BankAccount {
    private name: string; // Nome do titular da conta
    accountNumber: number; // Número da conta
    balance: number = 0; // Saldo da conta, inicializado como 0
    private status: boolean = true; // Status da conta, inicializado como true

    // Construtor da classe
    constructor(name: string, accountNumber: number) {
        this.name = name; // Define o nome do titular da conta
        this.accountNumber = accountNumber; // Define o número da conta
    }

    // Métodos para manipular o nome do titular da conta
    setName = (name: string): void => {
        this.name = name;
        console.log('Nome alterado com sucesso');
    }
    getName = (): string => {
        return this.name;
    }

    // Métodos para operações bancárias
    deposit = () => {
        if (this.validateStatus()) {
            console.log("Você depositou dinheiro na sua conta");
        }
    }
    withdraw = () => {
        console.log("Você sacou dinheiro da sua conta");
    }
    getBalance = () => {
        console.log(this.balance);
    }

    // Método privado para validar o status da conta
    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }
        throw new Error('Conta inativa');
    }
}
```

Este projeto representa uma estrutura básica de um sistema bancário em TypeScript, utilizando herança e polimorfismo para criar diferentes tipos de contas bancárias. O arquivo `app.ts` demonstra a criação de uma conta de pessoa física e a realização de um depósito nessa conta. 
