// Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms

function saveToStorage(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}

function retrieveAndLogValues() {
    const localStorageValue = localStorage.getItem("key");
    const sessionStorageValue = sessionStorage.getItem("key");
    console.log(`Retrieved ${localStorageValue} from localStorage and ${sessionStorageValue} from sessionStorage`);
}

saveToStorage("key", "value");
retrieveAndLogValues();
