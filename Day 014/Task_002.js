// Add a method to the Person class that updates the age property and logs the updated age

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age to ${this.age}`);
    }
}
const person = new Person("John", 25);
person.updateAge(30);
console.log(person.greet());
