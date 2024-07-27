// Write a script that generates unique IDs using a closure to keep track of the last generated ID

function uniqueID() {
    let lastID = 0;
    return function() {
        lastID++;
        return lastID;
    };
}


console.log(uniqueID()());
console.log(uniqueID()());
