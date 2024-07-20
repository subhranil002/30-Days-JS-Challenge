// Write a script that uses enhanced object literals to create and log an object with methods and computed property names

const obj = {
    name: 'Subhranil',
    age: 21,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

obj.greet(); // Hello, my name is Subhranil and I am 21 years old.
