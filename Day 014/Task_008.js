// Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name

class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set name(newName) {
        const [firstName, lastName] = newName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Person("John", "Doe");
person.name = "Jane Doe";
console.log(person.fullName);
