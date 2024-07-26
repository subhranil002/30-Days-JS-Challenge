// Create a module that exports an object representing a person with properties and methods.

const person = {
    name: "Subhranil",
    age: 21,
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
};

module.exports = person;
