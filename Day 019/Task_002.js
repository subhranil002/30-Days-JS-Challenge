// Write a regular expression to match all digits in a string. Log the matches

const regex = /\d/g;

const str = "1 apple a day keeps the doctor away. 2 ...";

while (true) {
    let match = regex.exec(str);
    if (match === null) {
        break;
    } else {
        console.log(match);
    }
}
