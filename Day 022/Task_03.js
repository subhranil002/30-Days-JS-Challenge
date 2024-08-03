// Solve the "Container With Most Water" problem on LeetCode.

// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases

function maxArea(heights) {
    let maxArea = 0;
    let twoLines;

    for (let i = 0; i < heights.length - 1; i++) {
        let j = i + 1;

        if (maxArea < Math.min(heights[i], heights[j])) {
            maxArea = Math.min(heights[i], heights[j]);
            twoLines = [i, j];
        }
    }

    return twoLines;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1, 1, 1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
