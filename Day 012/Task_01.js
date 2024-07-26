// Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console

function throwError() {
    throw new Error("Something went wrong!");
}

try {
    throwError();
} catch (error) {
    console.log(error.message);
}
