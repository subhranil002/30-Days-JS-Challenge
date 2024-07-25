// Use Promise.race to log the value of the first promise that resolves among multiple promises

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved!");
    }, 2001);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved!");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved!");
    }, 2002);
});

Promise.race([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
