// Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.

// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases

function getLongestSubstringLength(str, i = 0, j = 0, length = 0, map = {}) {
    if (j == str.length) {
        return length;
    }

    if (!map[str[j]]) {
        map[str[j]] = true;
        length = Math.max(length, j - i + 1);
        return getLongestSubstringLength(str, i, j + 1, length, map);
    } else {
        while (str[i] != str[j]) {
            map[str[i]] = false;
            i++;
        }
        i++;
        return getLongestSubstringLength(str, i, j + 1, length, map);
    }
}

console.log(getLongestSubstringLength("abcabcbb"));
console.log(getLongestSubstringLength("bbbbb"));
console.log(getLongestSubstringLength("pwwkew"));

