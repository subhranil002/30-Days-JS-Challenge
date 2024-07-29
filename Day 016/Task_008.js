// Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases

function countOccurrence(arr, n, key) {
    if (n === 0) {
        return 0;
    }

    if (arr[n - 1] === key) {
        return 1 + countOccurrence(arr, n - 1, key);
    }

    return countOccurrence(arr, n - 1, key);
}

console.log(countOccurrence([1, 1, 2, 3, 2, 2, 2, 1], 8, 2));
console.log(countOccurrence([1, 1, 2, 3, 2, 2, 2, 1], 8, 3));
console.log(countOccurrence([1, 1, 2, 3, 2, 2, 2, 1], 8, 1));
