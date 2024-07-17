// Write a script that prints a pattern of stars using nested loops

for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 5; j >= i; j--) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Output:
// * * * * * 
// * * * *
// * * *
// * *
// *