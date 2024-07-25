// Uses async/await to handle promises and includes error handling with try-catch

async function handlePromises() {
    try {
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise 1 resolved!");
            }, 2000);
        });

        const promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Promise 2 rejected!");
            }, 2000);
        });

        const promise3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise 3 resolved!");
            }, 2000);
        });

        const values = await Promise.all([promise1, promise2, promise3]);
        console.log(values);
    } catch (error) {
        console.log(error);
    }
}

handlePromises();
