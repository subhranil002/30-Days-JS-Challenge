// Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value

function binarySearch(array, low, high, target) {
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
        return mid + 1;
    } else if (array[mid] > target) {
        return binarySearch(array, low, mid - 1, target);
    } else {
        return binarySearch(array, mid + 1, high, target);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 7;
console.log(binarySearch(arr, 0, arr.length - 1, target));
