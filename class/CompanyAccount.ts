import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (valorE: number): void => {
    if (this.validateStatus()) {
      console.log("Conta ativa, empréstimo aprovado");
      this.balance += valorE;
      console.log(
        `Você recebeu um empréstimo de ${valorE}. Seu saldo é de ${this.balance}`
      );
    }
  };
}
