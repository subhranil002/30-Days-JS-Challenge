// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment

// Using 'let'
let x = 10;
console.log('Initial value using let:', x); // Initial value using let: 10

x = 20;
console.log('Reassigned value using let:', x); // Reassigned value using let: 20

// Using 'const'
const y = 30;
console.log('Initial value using const:', y); // Initial value using const: 30

y = 40; // Reassigning a constant is not allowed

// C:\30-Days-JS-Challenge\Day 1\Bonus Tasks\Task_02.js:12
// y = 40; // Reassigning a constant is not allowed
//   ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\30-Days-JS-Challenge\Day 1\Bonus Tasks\Task_02.js:12:3)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)     
//     at node:internal/main/run_main_module:28:49

// Node.js v20.10.0