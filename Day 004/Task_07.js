// Write a program to print a pattern using nested for loops
// * 
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let pattern = ""; // Initialize pattern

    for (let j = 1; j <= i; j++) {
        pattern += "* "; // Add stars to pattern
    }

    console.log(pattern); // Output the pattern for each iteration
}
