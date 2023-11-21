export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit(valorD: number): void {
    // Implementação do método de depósito
    this.balance += valorD;
    console.log(`Você depositou ${valorD}.`);
  }

  withdraw = (valorS: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= valorS) {
        this.balance -= valorS;
        console.log(`Você sacou ${valorS}. Seu saldo é de ${this.balance}`);
      }
      else {
        console.log(`Saldo insuficiente para saque de ${valorS}`)
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

export class DioSpecialAccount extends DioAccount {
  deposit = (valorD: number): void => {
    super.deposit(valorD);
    this.balance += 10;
  }
}
