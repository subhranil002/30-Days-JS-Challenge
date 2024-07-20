// Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments

const arr = [1, 2, 3];

const newArr = [...arr, 4, 5, 6];

console.log(newArr); // [1, 2, 3, 4, 5, 6]

function product(...numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1);
}

console.log(product(2, 3, 4, 5)); // 120
