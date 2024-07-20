// Use enhanced object literals to create an object with methods and properties, and log the object to the console

const obj = {
    name: 'Subhranil',
    age: 21,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

obj.greet(); // Hello, my name is Subhranil and I am 21 years old.
