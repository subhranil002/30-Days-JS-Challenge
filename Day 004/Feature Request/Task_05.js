// Create a script that calculates the factorial of a number using a do…while loop

let num = 5;
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while (i <= num);

console.log(factorial);
