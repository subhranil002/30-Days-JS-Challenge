// Write a script that defines a class with private fields and methods to manipulate these fields (optional)

class Account {
    #balance = 0;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    get balance() {
        return this.#balance;
    }
}   

const account = new Account(1000);
console.log(account.balance);
account.deposit(500);
console.log(account.balance); 
account.withdraw(2000);
console.log(account.balance); 
