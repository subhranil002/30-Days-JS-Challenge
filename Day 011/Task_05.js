// Write an async function that handles a rejected promise using try-catch and logs the error message

async function handleRejectedPromise(promise) {
    try {
        const value = await promise;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
}

handleRejectedPromise(new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected!");
    }, 2000);
}));    
