// Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script

const axios = require("axios");

axios
    .get("https://api.github.com/users/subhranil002")
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
