// Write a regular expression to match all words in a string that start with a capital letter. Log the matches

const regex = /[A-Z]\w*/g;

const str = "The quick brown fox jumps over the lazy dog. The fox jumps over the dog. The dog jumps over the fox.";

while (true) {
    let match = regex.exec(str);
    if (match === null) {
        break;
    } else {
        console.log(match);
    }
}
