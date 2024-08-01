// Write a script to save a string value to localStorage and retrieve it. Log the retrieved value

const key = 'my-key';
const value = 'my-value';

localStorage.setItem(key, value);

console.log(localStorage.getItem(key));
