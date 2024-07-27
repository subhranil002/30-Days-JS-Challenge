// Write a script that demonstrates static methods and properties in classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static getName() {
        return "John";
    }
}

console.log(Person.getName());
