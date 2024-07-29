// Write a recursive function to reverse a string. Log the result for a few test cases

const reverseString = (str) => {
    if (str.length === 0) return "";
    return reverseString(str.slice(1)) + str[0];
};

console.log(reverseString("Hello"));
console.log(reverseString("World"));
console.log(reverseString("abcdefg"));
