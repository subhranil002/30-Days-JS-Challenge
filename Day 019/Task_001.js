// Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches

const regex = /JavaScript/g;

const str =
    "JavaScript is a programming language that is used to make web pages and web applications. JavaScript is often used in the browser, but it can also be used on the server. It is a high-level, interpreted language that is also a base for the development of web applications.";

while (true) {
    let match = regex.exec(str);
    if (match === null) {
        break;
    } else {
        console.log(match);
    }
}
