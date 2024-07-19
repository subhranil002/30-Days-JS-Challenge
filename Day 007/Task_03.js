// Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

book.getTitleAndAuthor = () => {
    return `${this.title} by ${this.author}`;
};

console.log(book.getTitleAndAuthor());

// Output:
// The Great Gatsby by F. Scott Fitzgerald
