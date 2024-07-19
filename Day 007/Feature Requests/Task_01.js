// Write a script that creates a book object, adds methods to it, and logs its properties and method results

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

book.getTitle = () => { 
    return this.title;
};

book.printAuthor = () => {    
    return this.author;
};

console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.getTitle());
console.log(book.printAuthor());

// Output:
// The Great Gatsby
// F. Scott Fitzgerald
// 1925
// The Great Gatsby
// F. Scott Fitzgerald
