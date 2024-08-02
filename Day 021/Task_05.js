// Solve the "Valid Parentheses" problem on LeetCode.

// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.

function isValid(s) {
    let stack = [];

    // Way 1
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
    //         stack.push(s[i]);
    //     } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
    //         if (stack.length === 0) {
    //             return false;
    //         } else if (s[i] === ")") {
    //             if (stack.includes("(")) {
    //                 stack.pop();
    //             } else {
    //                 return false;
    //             }
    //         } else if (s[i] === "]") {
    //             if (stack.includes("[")) {
    //                 stack.pop();
    //             } else {
    //                 return false;
    //             }
    //         } else if (s[i] === "}") {
    //             if (stack.includes("{")) {
    //                 stack.pop();
    //             } else {
    //                 return false;
    //             }
    //         }
    //     }
    // }

    // Way 2
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
