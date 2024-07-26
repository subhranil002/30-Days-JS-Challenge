// Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console

fetch("https://www.subhranil.com/invalid-url")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });
