// Array de Strings
const myArray: string[] = ["apple", "banana", "orange"];
console.log('manipulando array');
console.log('==================');
const buscarElemento = myArray.find(elemento => elemento === 'banana');
console.log('buscando elemento com find: ', buscarElemento);
console.log('------------------');
myArray.forEach(myArray => console.log(myArray));
myArray.forEach(myArray => {
    if (myArray === 'banana') {
        console.log('banana encontrada');
    }
});
console.log('buscando elemento com forEach');
console.log('------------------');
myArray.map(myArray => console.log(myArray));
console.log('buscando elemento com map');