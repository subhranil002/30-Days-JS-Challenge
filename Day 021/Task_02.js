// Solve the "Reverse Integer" problem on LeetCode.

// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.

function reverseInteger(x) {
    if (x < 0) {
        return -reverseInteger(-x);
    }

    if (x === 0) {
        return 0;
    }

    let reversed = 0;

    while (x > 0) {
        let remainder = x % 10;
        reversed = reversed * 10 + remainder;
        x = Math.floor(x / 10);
    }
    
    return reversed;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));
console.log(reverseInteger(0));
console.log(reverseInteger(100));
