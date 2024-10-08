// Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases

function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([10, 20, 30, 40, 50]));
console.log(sum([15, 25, 35, 45, 55]));
