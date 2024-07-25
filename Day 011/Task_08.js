// Use Promise.all to wait for multiple promises to resolve and then log all their values

const urls = [
    "https://api.github.com/users/subhranil002/repos",
    "https://api.github.com/users/subhranil002/followers",
    "https://api.github.com/users/subhranil002/following",
];

Promise.all(urls.map(url => fetch(url)))
    .then((responses) => {
        responses.forEach((response) => {
            response.json().then((data) => {
                console.log(data);
            });
        });
});
