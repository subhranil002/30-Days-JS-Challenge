// Create a closure that captures a user's name and returns a function that greets the user by name

function createGreeter(name) {
    return function greet() {
        return `Hello, ${name}!`;
    };
}

const greet = createGreeter('John');
console.log(greet());
