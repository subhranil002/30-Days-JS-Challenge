// Access and log the name of the library and the titles of all the books in the library

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

console.log(library.name);
console.log(library.books.map(book => book.title));

// Output:
// Library Name
// ["The Great Gatsby", "The Catcher in the Rye", "The Adventures of Huckleberry Finn"]
