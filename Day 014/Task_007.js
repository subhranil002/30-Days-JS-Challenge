// Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter

class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person("John", "Doe");
console.log(person.fullName);
