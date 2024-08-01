// Write a script to remove an item from localStorage. Log the localStorage content before and after removal

const userData = localStorage.getItem("userData");

console.log("Before removal:", userData);

localStorage.removeItem("userData");

console.log("After removal:", localStorage.getItem("userData"));
