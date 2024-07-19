// Use Object.keys and Object.values methods to log all the keys and values of the book object

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

console.log(Object.keys(library.books[0]));
console.log(Object.values(library.books[0]));

// Output:
// ["title", "author", "year", "genre"]
// ["The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction"]
