// Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases

function binarySearch(arr, low, high, target) {
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid + 1;
    }
    else if (arr[mid] > target) {
        return binarySearch(arr, low, mid - 1, target);
    }
    else {
        return binarySearch(arr, mid + 1, high, target);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 10, 4));
console.log(binarySearch([11, 22, 33, 44, 55, 66, 77, 88, 99, 100], 0, 10, 99));
console.log(binarySearch([13, 17, 25, 44, 56], 0, 5, 44));
