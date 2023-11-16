// Classe abstrata BankAccount que representa uma conta bancária genérica
export abstract class BankAccount {
    private name: string; // Nome do titular da conta
    private readonly accountNumber: number; // Número da conta
    balance: number = 0; // Saldo da conta, inicializado como 0
    private status: boolean = true; // Status da conta, inicializado como true

    // Construtor da classe
    // Recebe o nome do titular e o número da conta como parâmetros
    constructor(name: string, accountNumber: number) {
        this.name = name; // Define o nome do titular da conta
        this.accountNumber = accountNumber; // Define o número da conta
    }
    // Método para definir o nome do titular da conta
    // Recebe o novo nome como parâmetro
    // Não retorna nada
    setName = (name: string): void => {
        this.name = name; // Define o novo nome do titular da conta
        console.log('Nome alterado com sucesso'); // Imprime uma mensagem de sucesso no console
    }

    // Método para obter o nome do titular da conta
    // Retorna o nome do titular da conta como uma string
    getName = (): string => {
        return this.name;
    }


    // Método para depositar dinheiro na conta
    deposit = () => {
        if (this.validateStatus()) {
            console.log("Você depositou dinheiro na sua conta");
        }
    }

    // Método para sacar dinheiro da conta
    withdraw = () => {
        console.log("Você sacou dinheiro da sua conta");
    }

    // Método para obter o saldo da conta
    getBalance = () => {
        console.log(this.balance);
    }

    // Método privado para validar o status da conta
    // Este método retorna o status da conta se a conta estiver ativa
    // Se a conta estiver inativa, ele lança um erro
    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }
        throw new Error('Conta inativa');
    }
}