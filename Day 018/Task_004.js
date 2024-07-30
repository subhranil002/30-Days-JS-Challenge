// Implement the linear search algorithm to find a target value in an array. Log the index of the target value

function linearSearch(array, n, target) {
    if (n > array.length) {
        return -1;
    } else if (array[n] === target) {
        return n + 1;
    }

    return linearSearch(array, n + 1, target);
}

const arr = [5, 4, 2, 3, 1, 6, 7, 8, 9, 10];
const target = 5;
console.log(linearSearch(arr, 0, target));
