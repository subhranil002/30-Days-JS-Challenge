// Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message);
}
