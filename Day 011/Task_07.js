// Use the fetch API to get data from a public API and log the response data to the console using async/await

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getData("https://api.github.com/users/subhranil002");
