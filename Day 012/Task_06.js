// Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console

function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            resolve();
        } else {
            reject();
        }
    });
}

randomPromise()
    .then(() => {
        console.log("Promise resolved!");
    })
    .catch((error) => {
        console.log("Something went wrong!");
    });
