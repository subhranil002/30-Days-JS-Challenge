// Write a script that includes a higher-order function to apply a given function multiple times

function repeat(func, num) {
    for (let i = 0; i < num; i++) {
        func();
    }
}

repeat(() => {
    console.log("Hello, World!");
}, 3);
