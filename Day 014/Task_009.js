// Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods

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
}   

const account = new Account(1000);
account.deposit(500);
account.withdraw(2000); // Error: Insufficient funds
// console.log(account.#balance); // Error: Cannot access private field #balance
