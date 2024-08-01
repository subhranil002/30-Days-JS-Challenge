// Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures

const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/g;

const str = "(123) 456-7890 is the number. Phone numbers are (123) 456-7890 and (987) 654-3210.";

while (true) {
    let match = regex.exec(str);
    if (match === null) {
        break;
    } else {
        console.log(match);
    }
}
