// Create a script that uses getters and setters in a class

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
