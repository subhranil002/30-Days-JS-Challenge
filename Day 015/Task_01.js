// Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result

function outer() {
    const x = 10;

    return function inner() {
        console.log(x);
    };
}

const inner = outer();
inner();
