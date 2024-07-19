// Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method

const library = {
    name: "Library Name",
    books: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            genre: "Fiction",
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            year: 1951,
            genre: "Fiction",
        },
        {
            title: "The Adventures of Huckleberry Finn",
            author: "Mark Twain",
            year: 1884,
            genre: "Fiction",
        },
    ],
};

library.books.forEach(book => {
    book.getTitleAndYear = () => {
        return `${book.title}, ${book.year}`;
    };
});

console.log(library.books[0].getTitleAndYear());

// Output:  The Great Gatsby, 1925
