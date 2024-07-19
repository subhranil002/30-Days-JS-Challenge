// Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

book.updateYear = (year) => {
    this.year = year;
};

book.updateYear(1950);

console.log(book);

// Output:
// { 
//      title: 'The Great Gatsby',
//      author: 'F. Scott Fitzgerald',
//      year: 1950
// }