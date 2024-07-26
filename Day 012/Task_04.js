// Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("Something went wrong!");
}

try {
    throwCustomError();
} catch (error) {
    console.log(error.message);
}