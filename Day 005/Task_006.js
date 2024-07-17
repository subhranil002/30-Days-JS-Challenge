// Write an arrow function to check if a string contains a specific character and return a boolean value

const containsCharacter = (str, char) => {
    return str.includes(char); // Use the includes method to check if the string contains the character
}

const result = containsCharacter("Hello", "l");
console.log(result); // true
