// Create a module that exports multiple constants and functions

const PI = 3.14;
const E = 2.71828;

function add(a, b) {
    return a + b;
}

module.exports = {
    PI,
    E,
    add,
};
