// Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console

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

console.log(library);

// Output:
// {
//     name: "Library Name",
//     books: [
//         {
//             title: "The Great Gatsby",
//             author: "F. Scott Fitzgerald",
//             year: 1925,
//             genre: "Fiction",
//         },
//         {
//             title: "The Catcher in the Rye",
//             author: "J.D. Salinger",
//             year: 1951,
//             genre: "Fiction",
//         },
//         {
//             title: "The Adventures of Huckleberry Finn",
//             author: "Mark Twain",
//             year: 1884,
//             genre: "Fiction",
//         },
//     ],
// }
