// Write a script that memoizes the results of a function and demonstrates it with a factorial calculation

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

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // 120
console.log(memoizedFactorial(5)); // 120 (from cache)
console.log(memoizedFactorial(6)); // 720
console.log(memoizedFactorial(6)); // 720 (from cache)