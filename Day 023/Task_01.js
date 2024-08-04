// Solve the "Median of Two Sorted Arrays" problem on LeetCode.

// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases

const median = function (nums1, nums2) {
    // Way 1
    // const nums = [...nums1, ...nums2].sort();

    // Way 2
    let nums = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            nums.push(nums1[i++]);
        } else {
            nums.push(nums2[j++]);
        }
    }

    while (i < nums1.length) {
        nums.push(nums1[i++]);
    }

    while (j < nums2.length) {
        nums.push(nums2[j++]);
    }

    return nums[Math.floor(nums.length / 2)];
};

console.log(median([1, 3], [2]));
console.log(median([1, 2], [3, 4]));
console.log(median([1, 2], [3, 4, 5]));
console.log(median([1, 2], [3, 4, 5, 6]));
