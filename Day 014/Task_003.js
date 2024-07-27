// Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`;
    }
}

const student = new Student("John", 25, "123456789");
console.log(student.greet());
