// Create an object with computed property names based on variables and log the object to the console

const a = 1;
const b = 2;
const c = 3;

const obj = {
    [a]: 'a',
    [b]: 'b',
    [c]: 'c'
};

console.log(obj); // {1: 'a', 2: 'b', 3: 'c'}
