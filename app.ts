import { CompanyAccount } from "./class/CompanyAccount";
import { DioAccount, DioSpecialAccount } from "./class/DioAccount";
import { PeopleAccount } from "./class/PeopleAccount";

// Cria uma nova conta de pessoa com id 1, nome 'Jhow' e saldo inicial de 10
const peopleAccount: PeopleAccount = new PeopleAccount(1, "Jhow", 10);

// Imprime o nome do cliente
console.log(`Nome do Cliente: ${peopleAccount.getName()}`);

// Deposita 100 na conta da pessoa
peopleAccount.deposit(100);

// Retira 101 da conta da pessoa
peopleAccount.withdraw(101);

console.log(`Você tem ${peopleAccount.balance} na conta`);

console.log("----------------------------------");

// Cria uma nova conta de empresa com o nome 'DIO' e saldo inicial de 20
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);

// Imprime o nome da empresa
console.log(`Dados da Instituição: ${companyAccount.getName()}`);

// Deposita 200 na conta da empresa
companyAccount.deposit(200);

// A empresa pega um empréstimo de 1000
companyAccount.getLoan(1000);

console.log("----------------------------------");

// Aqui você deve criar uma instância da classe DioSpecialAccount
const minhaContaEspecial: DioSpecialAccount = new DioSpecialAccount("John", 2);
console.log(`Nome do Cliente: ${minhaContaEspecial.getName()}`);
// Deposite um valor na conta
minhaContaEspecial.deposit(100);
// Imprima o saldo da conta
console.log(`Você ganhou um bônus de 10: ${minhaContaEspecial.balance}`);
