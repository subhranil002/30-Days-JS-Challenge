// Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    static totalStudents = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.totalStudents++;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`;
    }
}

const student1 = new Student("John", 25, "123456789");
const student2 = new Student("John", 25, "123456789");
const student3 = new Student("John", 25, "123456789");
const student4 = new Student("John", 25, "123456789");

console.log(`Total number of students: ${Student.totalStudents}`);
