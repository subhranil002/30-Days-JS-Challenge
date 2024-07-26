// Create a script that handles errors when using the fetch API to request data from invalid URLs

fetch("https://www.subhranil.com/invalid-url")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });
