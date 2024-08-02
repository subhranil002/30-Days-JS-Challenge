// Solve the "Two Sum" problem on LeetCode.

// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.

function twoSum(nums, target) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push([i, j]);
            }
        }
    }

    return result;
}

console.log(twoSum([2, 7, 11, 15, 2, 7], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3, 3, 3], 6));
