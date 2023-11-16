// Importa a classe BankAccount do arquivo BankAccount.ts
import { BankAccount } from './class/BankAccount';

// Importa a classe CompanyAccount do arquivo CompanyAccount.ts
import { CompanyAccount } from './class/CompanyAccount';

// Importa a classe PeopleAccount do arquivo PeopleAccount.ts
import { PeopleAccount } from './class/PeopleAccount';

// Cria uma nova instância da classe PeopleAccount, representando uma conta de pessoa física
// O construtor da classe PeopleAccount é chamado com os argumentos: 1 (número da conta), 'Jhow' (nome do titular) e 10 (saldo inicial)
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Jhow', 10);

// Imprime a instância da conta de pessoa física no console
console.log(peopleAccount);

// Chama o método de depósito na conta de pessoa física
peopleAccount.deposit();

// Cria uma nova instância da classe CompanyAccount, representando uma conta de empresa
// O construtor da classe CompanyAccount é chamado com os argumentos: 'BlackBank' (nome da empresa) e 100 (saldo inicial)
const companyAccount: CompanyAccount = new CompanyAccount('BlackBank', 100);
companyAccount.deposit();