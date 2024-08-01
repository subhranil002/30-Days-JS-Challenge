// Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it

localStorage.setItem('myObject', JSON.stringify({name: 'John', age: 30}));

const myObject = JSON.parse(localStorage.getItem('myObject'));

console.log(myObject);
