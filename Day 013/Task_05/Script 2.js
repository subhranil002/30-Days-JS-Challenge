// Import the entire module as an object in another script and use its properties

const {
    PI,
    E,
    add,
} = require('./Script 1.js');

console.log(PI);
console.log(E);
console.log(add(1, 2));
