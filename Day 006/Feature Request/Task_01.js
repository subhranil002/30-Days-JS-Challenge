// Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods

const numbers = [1, 2, 3, 4, 5];

numbers.unshift(0);

numbers.push(6);

numbers.shift();

numbers.pop();

console.log(numbers); // [0, 2, 3, 4, 5]
