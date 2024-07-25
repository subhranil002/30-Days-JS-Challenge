// Uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results

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

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log("Promise.all:", values);
});

Promise.race([promise1, promise2, promise3]).then((values) => {
    console.log("Promise.race:", values);
});
