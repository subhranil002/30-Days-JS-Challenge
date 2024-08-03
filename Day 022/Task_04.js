// Solve the "3Sum" problem on LeetCode.

// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// Log the triplets for a few test cases, including edge cases

function threeSum(nums) {
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    console.log([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
}

threeSum([1, 0, -1, 0, -2, 2]);
threeSum([4, -3, 2, -1, 4]);
threeSum([4, 3, 2, -1, 4]);
threeSum([0, 0, 0]);
