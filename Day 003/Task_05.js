// Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console

const score = 90;

switch (score) {
    case 90:
        console.log("A"); // if score is 90, log A
        break;
    case 80:
        console.log("B"); // if score is 80, log B
        break;
    case 70:
        console.log("C"); // if score is 70, log C
        break;
    case 60:
        console.log("D"); // if score is 60, log D
        break;
    case 50:
        console.log("F"); // if score is 50, log F
        break;
    default:
        console.log("Invalid score"); // if score is not 90-100, log Invalid score
        break;
}
