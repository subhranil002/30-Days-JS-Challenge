// Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age

function greetPerson(name, age = 18) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

const result = greetPerson("John");
console.log(result); // Hello, my name is John and I am 18 years old.
