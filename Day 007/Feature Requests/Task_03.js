// Write a script that demonstrates iterating over an object’s properties using for...in loop and Object.keys / Object.values

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

for (const property in book) {
    console.log(`${property}: ${book[property]}`);
}

Object.keys(book).forEach(key => {
    console.log(`${key}: ${book[key]}`);
});

Object.values(book).forEach(value => {
    console.log(value);
});

// Output:
// title: The Great Gatsby
// author: F. Scott Fitzgerald
// year: 1925
// title
// author
// year
// The Great Gatsby
// F. Scott Fitzgerald
// 1925

