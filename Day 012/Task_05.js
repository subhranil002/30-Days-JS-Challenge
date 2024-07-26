// Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block

function validateInput(input) {
    if (input.trim() === "") {
        throw new Error("Input cannot be empty!");
    }
}

try {
    validateInput("");
} catch (error) {
    console.log(error.message);
}
