// Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const arr = [5, 4, 3, 2, 1];
bubbleSort(arr);
console.log(arr);
