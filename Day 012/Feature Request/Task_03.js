// Write a script that handles errors in promises using .catch() and try-catch within async functions

function randomPromise() {
    return new Promise((resolve, reject) => {
        reject();
    });
}

randomPromise()
    .catch((error) => {
        console.log("Something went wrong!");
    });

async function asyncFunction() {
    try {
        await randomPromise();
        console.log("Promise resolved!");
    } catch (error) {
        console.log("Something went wrong!");
    }
}

asyncFunction();
