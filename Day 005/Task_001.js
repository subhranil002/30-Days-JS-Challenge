// Write a function to check if a number is even or odd and log the result to the console

function isEvenOrOdd(number) {
    if (number % 2 === 0) { // Check if the number is divisible by 2 (even)
        console.log(number + " is even");
    } else { // If not divisible by 2 (odd)
        console.log(number + " is odd");
    }
}

isEvenOrOdd(10); // Output: 10 is even
isEvenOrOdd(11); // Output: 11 is odd
isEvenOrOdd(12); // Output: 12 is even
