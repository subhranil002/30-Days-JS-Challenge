// Write a higher-order function that takes a function and a number, and calls the function that many times

function repeat(func, num) { // A function that takes a function and a number
    for (let i = 0; i < num; i++) {
        func(); // Call the function that many times
    }
}

repeat(() => { // Define a function that logs "Hello, World!" to the console
    console.log("Hello, World!");
}, 3);
