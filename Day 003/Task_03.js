// Write a program to find the largest of three numbers using nested if-else statements

const num1 = 10;
const num2 = 20;
const num3 = 30;

if (num1 > num2) { // checking if num1 is greater than num2
    if (num1 > num3) { // checking if num1 is greater than num3
        console.log(num1);
    } else { // if num1 is not greater than num3
        console.log(num3);
    }
} else {
    if (num2 > num3) { // checking if num2 is greater than num3
        console.log(num2);
    } else { // if num2 is not greater than num3
        console.log(num3);
    }
}
