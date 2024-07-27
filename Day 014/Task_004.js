// Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
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
