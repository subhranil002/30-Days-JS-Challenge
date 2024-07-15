// Create a script that uses a switch case to assign a grade based on a score and logs the grade

const score = 85;

switch (score) {
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
    case 50:
        console.log("F");
        break;
    default:
        console.log("Invalid score");
        break;
}
