// Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved!");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved!");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved!");
    }, 2000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
