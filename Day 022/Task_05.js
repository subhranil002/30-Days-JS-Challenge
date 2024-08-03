// Solve the "Group Anagrams" problem on LeetCode.

// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases

function groupAnagrams(strs) {
    for (let i = 0; i < strs.length - 1; i++) {
        for (let j = i + 1; j < strs.length; j++) {
            if (strs[i].length !== strs[j].length) {
                continue;
            } else if (
                strs[i].split("").sort().join("") ===
                strs[j].split("").sort().join("")
            ) {
                console.log([strs[i], strs[j]]);
            }
        }
    }
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
groupAnagrams(["", ""]);
groupAnagrams(["ab", "ba", "abc", "cba", "bca", "cab"]);
