// Write a function that memoizes the results of another function. Use a closure to store the results of previous computations

function memoize(fn) {
    let cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache[key];
        }

        const result = fn(args);
        cache.set(key, result);
        return result;
    };
}

const add = (a, b) => a + b;

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3 (from cache)
console.log(memoizedAdd(2, 3)); // 5
console.log(memoizedAdd(2, 3)); // 5 (from cache)

