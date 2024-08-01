// Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty

function clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
}

clearStorage();
console.log(localStorage.length, sessionStorage.length);    
