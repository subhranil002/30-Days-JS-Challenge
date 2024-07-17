// Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result

function compose(func1, func2) { // A function that takes two functions and a value
    return (value) => { // A function that takes a value
        return func2(func1(value)); // Apply the first function to the value, and then apply the second function to the result
    }
}

// Define a function that takes a number and returns its square
function square(num) {
    return num * num;
}

// Define a function that takes a number and returns its cube
function cube(num) {
    return num * num * num;
}

const result = compose(square, cube)(5);
console.log(result); // 15625
