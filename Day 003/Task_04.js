// Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console

const day = 3;

switch (day) { // switch statement
    case 1:
        console.log("Sunday"); // if day is 1, log Sunday
        break; // break out of switch statement
    case 2:
        console.log("Monday"); // if day is 2, log Monday
        break;
    case 3:
        console.log("Tuesday"); // if day is 3, log Tuesday
        break;
    case 4:
        console.log("Wednesday"); // if day is 4, log Wednesday
        break;
    case 5:
        console.log("Thursday"); // if day is 5, log Thursday
        break;
    case 6:
        console.log("Friday"); // if day is 6, log Friday
        break;
    case 7:
        console.log("Saturday"); // if day is 7, log Saturday
        break;
    default:
        console.log("Invalid day"); // if day is not 1-7, log Invalid day
        break;
}
