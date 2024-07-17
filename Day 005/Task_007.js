// Write a function that takes two parameters and returns their product. Provide a default value for the second parameter

function multiply(num1, num2 = 1) {
    return num1 * num2;
}

const result = multiply(5);
console.log(result); // 5
