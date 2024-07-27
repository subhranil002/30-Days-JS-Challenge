// Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation

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
console.log(account.balance); // 1000
account.deposit(500);
console.log(account.balance); // 1500
account.withdraw(2000); // Error: Insufficient funds
console.log(account.balance); // 1500
