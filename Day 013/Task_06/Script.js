// Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script

const { compact } = require("lodash");

const arr = [0, 1, false, 2, '', 3];

const newArr = compact(arr);

console.log(newArr);
