// Create a script that defines and throws custom errors, handling them with try-catch blocks

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
