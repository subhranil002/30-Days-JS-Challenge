// Write a regular expression to capture the username and domain from an email address. Log the captures

const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const email = 'john.doe@example.com';
const matches = email.match(emailRegex);

console.log(`Username: ${matches[1]}`);
console.log(`Domain: ${matches[2]}`);
