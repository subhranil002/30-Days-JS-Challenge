// Write a script that iterates over an array using both for loop and forEach method and logs each element

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(number => console.log(number));

// Output:
// 1
// 2
// 3
// 4
// 5
// 1
// 2
// 3
// 4
// 5
