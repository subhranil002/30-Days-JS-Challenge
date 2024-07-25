// Demonstrates creating and handling promises, including both resolved and rejected states

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

promise1.then((value) => {
    console.log(value);
});

promise2.catch((error) => {
    console.log(error);
});
