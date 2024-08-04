// Solve the "Trapping Rain Water" problem on LeetCode.

// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// Log the amount of trapped water for a few test cases

const trap = function (height) {
    let leftMax = new Array(height.length).fill(0);
    let rightMax = new Array(height.length).fill(0);

    leftMax[0] = height[0];
    rightMax[height.length - 1] = height[height.length - 1];

    for (let i = 1; i < height.length; i++)
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);

    for (let i = height.length - 2; i >= 0; i--)
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);

    let water = 0;
    for (let i = 1; i < height.length - 1; i++)
        water += Math.min(leftMax[i], rightMax[i]) - height[i];

    return water;
};

console.log(trap([3, 1, 3, 2, 3, 4, 1, 3]));
console.log(trap([1, 1, 1, 1, 1, 1, 1, 1]));
console.log(trap(4, 2, 0, 6, 3, 2, 5));

