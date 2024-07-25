// Write an async function that waits for a promise to resolve and then logs the resolved value

async function waitForPromise(promise) {
    const value = await promise;
    console.log(value);
}

waitForPromise(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
}));
