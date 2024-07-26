// Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message

async function fetchData() {
    try {
        const response = await fetch("https://www.subhranil.com/invalid-url");
        console.log(response);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchData();
