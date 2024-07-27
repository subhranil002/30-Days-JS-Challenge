// Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable

function outerFunction() {
    var x = 10;
    return function innerFunction() {
        return x;
    };
}

var innerFunction = outerFunction();
console.log(innerFunction());
