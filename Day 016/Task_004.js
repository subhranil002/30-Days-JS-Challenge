// Write a recursive function to find the maximum element in an array. Log the result for a few test cases

function findMax(arr, n) {
    if (n === 1) {
        return arr[0];
    }

    return Math.max(arr[n - 1], findMax(arr, n - 1));
}

console.log(findMax([10, 20, 30, 40, 50], 5));
console.log(findMax([15, 25, 35, 45, 55], 5));
console.log(findMax([1, 2, 3, 4, 5], 5));
