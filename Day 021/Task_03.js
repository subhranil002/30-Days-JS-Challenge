// Solve the "Palindrome Number" problem on LeetCode.

// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.

function isPalindrome(x) {
    n = Math.abs(x);

    let reversed = n.toString().split("").reverse().join("");
    return n === parseInt(reversed);
}

console.log(isPalindrome(121));
console.log(isPalindrome(12321));
console.log(isPalindrome(1));
console.log(isPalindrome(-121));
