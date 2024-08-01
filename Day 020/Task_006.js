// Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it

const obj = {name: 'John', age: 30, city: 'New York'};
sessionStorage.setItem('obj', JSON.stringify(obj));

const objStr = sessionStorage.getItem('obj');
console.log(JSON.parse(objStr));
