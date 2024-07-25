// Fetches data from a public API using both promises and async/await, and logs the response data

async function getData1(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

function getData2(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                resolve();
            });
    });
}

getData1("https://api.github.com/users/subhranil002");
getData2("https://api.github.com/users/subhranil002");
