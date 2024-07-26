// Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message

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

async function asyncFunction() {
    try {
        await randomPromise();
        console.log("Promise resolved!");
    } catch (error) {
        console.log("Something went wrong!");
    }
}

asyncFunction();
