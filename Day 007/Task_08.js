// Use a for...in loop to iterate over the properties of the book object and log each property and its value

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

for (const property in library.books[0]) {
    console.log(`${property}: ${library.books[0][property]}`);
}

// Output:
// title: The Great Gatsby
// author: F. Scott Fitzgerald
// year: 1925
// genre: Fiction
