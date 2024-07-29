// Write a recursive function to check if a string is a palindrome. Log the result for a few test cases

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("A man, a plan, a canal, Panama!"));
