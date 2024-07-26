// Create a module that exports multiple functions using named exports

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract,
};
