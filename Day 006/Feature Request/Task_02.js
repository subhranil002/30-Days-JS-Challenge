// Create a script that uses map, filter, and reduce methods to transform and aggregate array data

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

const evenNumbers = numbers.filter(number => number % 2 === 0);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
console.log(evenNumbers); // [2, 4]
console.log(sum); // 15
