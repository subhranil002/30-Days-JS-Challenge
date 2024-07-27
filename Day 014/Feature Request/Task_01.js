// Write a script that defines a Person class with properties and methods, creates instances, and logs messages

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const person = new Person("John", 25);
console.log(person.greet());
