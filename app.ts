// Importa a classe BankAccount do arquivo BankAccount.ts
import { BankAccount } from './class/BankAccount';

// Importa a classe CompanyAccount do arquivo CompanyAccount.ts
import { CompanyAccount } from './class/CompanyAccount';

// Importa a classe PeopleAccount do arquivo PeopleAccount.ts
import { PeopleAccount } from './class/PeopleAccount';

// Cria uma nova instância da classe PeopleAccount, representando uma conta de pessoa física
// O construtor da classe PeopleAccount é chamado com os argumentos: 1 (número da conta), 'Jhow' (nome do titular) e 10 (saldo inicial)
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Jhow', 10);

// Chama o método deposit da instância peopleAccount, que provavelmente adiciona um valor ao saldo da conta
peopleAccount.deposit();

// Cria uma nova instância da classe CompanyAccount, representando uma conta de empresa
// O construtor da classe CompanyAccount é chamado com os argumentos: 'Black Bank' (nome da empresa) e 11 (número da conta)
const companyAccount: CompanyAccount = new CompanyAccount('Black Bank', 11);

// Chama o método deposit da instância companyAccount, que provavelmente adiciona um valor ao saldo da conta
// O resultado é então impresso no console
console.log(companyAccount.deposit());