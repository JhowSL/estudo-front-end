/* const user = {
    name: 'Jhow',
    age: 20,
    showName() {
        console.log(this.name);
    }
}
const user2 = {
    name: 'Jonh',
    age: 21,
    showName() {
        console.log(this.name);
    }
}
 */
class User {
    name: string = 'Jhow'
    age: number = 20

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showName = () => {
        console.log(this.name);
    }
}

const user = new User('Jhow', 20);
user.showName();

const user2 = new User('Jonh', 21);
user2.showName();