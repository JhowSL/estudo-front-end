interface Pessoa {
    nome: string;
    idade: number;
    profissao?: string;
}

const pessoa: Pessoa = {
    nome: 'Jhow',
    idade: 20,
    profissao: 'Programador'
}

const pessoa2: Pessoa = {
    nome: 'Jhow Jr.',
    idade: 20,
}

const pessoas: Array<Pessoa> = [
    pessoa,
    pessoa2
]
const numeros: number[] = [1, 2, 3, 4, 5];

console.log(pessoas[0].nome); // Isto irá imprimir o primeiro elemento do array 'pessoas'
console.log(pessoas[1].nome); // Isto irá imprimir o segundo elemento do array 'pessoas'
console.log(numeros[3])    // Isto irá imprimir o quarto elemento do array 'numeros'