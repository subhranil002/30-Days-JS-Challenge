// Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter

let counter = 0;

function createCounter() {
    return function incrementCounter() {
        counter++;
    };
}

const incrementCounter = createCounter();
incrementCounter();
console.log(counter);
incrementCounter();
console.log(counter);
