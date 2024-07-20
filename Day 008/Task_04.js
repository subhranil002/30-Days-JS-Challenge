// Use object destructuring to extract the title and author from a book object and log them to the console

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

const {title, author} = book;

console.log(title); // The Great Gatsby
console.log(author); // F. Scott Fitzgerald
