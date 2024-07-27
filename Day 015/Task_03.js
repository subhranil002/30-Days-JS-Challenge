// Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call

let lastId = 0;

function createId() {
    return function getId() {
        lastId++;
        return lastId;
    };
}

const getId = createId();
console.log(getId());
console.log(getId());
getId();
console.log(getId());
