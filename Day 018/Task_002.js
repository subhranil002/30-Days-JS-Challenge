// Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minPos = i;

        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minPos]) {
                minPos = j;
            }
        }

        if (minPos !== i) {
            let temp = arr[i];
            arr[i] = arr[minPos];
            arr[minPos] = temp;
        }
    }
}

const arr = [5, 4, 3, 2, 1];
selectionSort(arr);
console.log(arr);
