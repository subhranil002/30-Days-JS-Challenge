// Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results

const a = 8;
const b = 12;

console.log("a > b: " + (a > b)); // Output: a > b: true
console.log("a < b: " + (a < b)); // Output: a < b: false
console.log("a >= b: " + (a >= b)); // Output: a >= b: false
console.log("a <= b: " + (a <= b)); // Output: a <= b: true
console.log("a == b: " + (a == b)); // Output: a == b: false
console.log("a === b: " + (a === b)); // Output: a === b: false
console.log("a != b: " + (a != b)); // Output: a != b: true
console.log("a !== b: " + (a !== b)); // Output: a !== b: true

const condition1 = true;
const condition2 = false;
console.log("condition1 && condition2: " + (condition1 && condition2)); // Output: condition1 && condition2: false
console.log("condition1 || condition2: " + (condition1 || condition2)); // Output: condition1 || condition2: true
console.log("!condition1: " + (!condition1)); // Output: !condition1: false
