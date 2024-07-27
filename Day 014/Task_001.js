// Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message

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
