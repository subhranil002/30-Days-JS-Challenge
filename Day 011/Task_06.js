// Use the fetch API to get data from a public API and log the response data to the console using promises

const url = "https://api.github.com/users/subhranil002";

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
