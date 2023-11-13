// Array de Strings
const myArray: string[] = ["apple", "banana", "orange"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray.length);
console.log('------------------');
console.log('array original: ', myArray);
console.log('------------------');
console.log('array adicionando elemento: ', myArray.push('grape'));
console.log('------------------');
console.log('array removendo elemento: ', myArray.pop());
console.log('------------------');
console.log('array com elemento removido: ', myArray);
console.log('------------------');

// Array de números
const numberArray: number[] = [1, 2, 3, 4, 5];
console.log(numberArray);
console.log(numberArray[1]);
console.log(myArray.length);
console.log('------------------');
console.log('array original: ', numberArray);
console.log('------------------');
console.log('array adicionando elemento: ', numberArray.push(6));
console.log('------------------');
console.log('array removendo elemento: ', numberArray.pop());
console.log('------------------');
console.log('array com elemento removido: ', numberArray);
console.log('------------------');

// Array de booleanos
const booleanArray: boolean[] = [true, false, true];
console.log(booleanArray);
console.log(booleanArray[2]);
console.log(myArray.length);
console.log('------------------');
console.log('array original: ', booleanArray);
console.log('------------------');
console.log('array adicionando elemento: ', booleanArray.push(false));
console.log('------------------');
console.log('array removendo elemento: ', booleanArray.pop());
console.log('------------------');
console.log('array com elemento removido: ', booleanArray);
console.log('------------------');

// Array de objetos
const objectArray: { name: string, age: number }[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.log(objectArray);
console.log(objectArray[1]);
console.log(myArray.length);
console.log('------------------');
console.log('array original: ', objectArray);
console.log('------------------');
console.log('array adicionando elemento: ', objectArray.push({ name: "Dan", age: 40 }));
console.log('------------------');
console.log('array removendo elemento: ', objectArray.pop());
console.log('------------------');
console.log('array com elemento removido: ', objectArray);
console.log('------------------');

// Array de qualquer tipo
const anyArray: any[] = [1, "apple", true, { name: "Alice", age: 25 }];
console.log(anyArray);
console.log(myArray.length);
console.log('------------------');
console.log('array original: ', anyArray);
console.log('------------------');
console.log('array adicionando elemento: ', anyArray.push('grape'));
console.log('------------------');
console.log('array removendo elemento: ', anyArray.pop());
console.log('------------------');
console.log('array com elemento removido: ', anyArray);
console.log('------------------');
