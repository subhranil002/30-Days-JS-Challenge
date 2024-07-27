// Create a script that uses a closure to maintain a private counter with increment and get functions

function counter() {
    var count = 0;
    return {
        increment: function() {
            count++;
        },
        get: function() {
            return count;
        }
    };
}

var myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.get());
