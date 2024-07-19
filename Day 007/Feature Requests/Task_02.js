// Create a script that defines a library object containing an array of book objects and logs the library’s details

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
