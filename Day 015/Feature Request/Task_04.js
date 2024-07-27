// Create a script that demonstrates closures in loops to ensure functions log the correct index

const functions = [];

for (let i = 0; i < 5; i++) {
    functions.push(function logIndex() {
        console.log(i);
    });
}

functions.forEach(fn => fn());
