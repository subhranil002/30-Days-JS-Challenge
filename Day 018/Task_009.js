// Write a function to merge two sorted arrays into one sorted array. Log the merged array

function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let arr1Index = 0;
    let arr2Index = 0;

    while (arr1Index < arr1.length && arr2Index < arr2.length) {
        if (arr1[arr1Index] < arr2[arr2Index]) {
            result.push(arr1[arr1Index]);
            arr1Index++;
        } else {
            result.push(arr2[arr2Index]);
            arr2Index++;
        }
    }

    while (arr1Index < arr1.length) {
        result.push(arr1[arr1Index]);
        arr1Index++;
    }

    while (arr2Index < arr2.length) {
        result.push(arr2[arr2Index]);
        arr2Index++;
    }


    return result;
}

console.log(mergeSortedArrays([1, 2, 3, 4], [5, 6, 7, 8]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
