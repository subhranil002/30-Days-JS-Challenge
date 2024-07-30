// Write a function to count the occurrences of each character in a string. Log the character counts

function countChar(str) {
    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === ' ') {
            continue;
        } else if (char in charCount) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    console.log(charCount);
}

countChar('Hello World!');
