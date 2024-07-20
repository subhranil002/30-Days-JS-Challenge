// Create a script that uses array and object destructuring to extract values and log them

const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

const obj = {
    name: 'Subhranil',
    age: 21,
};

const {name, age} = obj;

console.log(name); // Subhranil
console.log(age); // 21
