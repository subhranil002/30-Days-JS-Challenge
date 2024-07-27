// Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static greet() {
        return "Hello, my name is unknown and I am unknown years old.";
    }
}

console.log(Person.greet());
