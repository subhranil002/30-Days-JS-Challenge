// Write a program to calculate the factorial of a number using a do…while loop

let num = 5;
let factorial = 1;
let i = 1;

do { 
    factorial *= i; // Calculate factorial
    i++;
} while (i <= num);

console.log(factorial); // Output: 120
