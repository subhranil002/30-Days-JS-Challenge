// Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(15));
