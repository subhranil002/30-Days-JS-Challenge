// Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal

const sessionStorageContent = sessionStorage.getItem("key");
console.log(`SessionStorage content before removal: ${sessionStorageContent}`);

sessionStorage.removeItem("key");
const sessionStorageContentAfterRemoval = sessionStorage.getItem("key");
console.log(`SessionStorage content after removal: ${sessionStorageContentAfterRemoval}`);
