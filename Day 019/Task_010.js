// Write a regular expression to validate a URL. Log whether the URL is valid

const validateURL = (url) => {
    const urlPattern =
        /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?$/;
    const isValid = urlPattern.test(url);
    console.log(`URL: ${url} is ${isValid ? "valid" : "invalid"}`);
};

validateURL("https://www.example.com");
validateURL("http://example.com");
validateURL("https://example.com/path/to/page?name=ferret&color=purple");
validateURL("ftp://example.com");
validateURL("http://256.256.256.256");
validateURL("https://example");
validateURL("https://example..com");
