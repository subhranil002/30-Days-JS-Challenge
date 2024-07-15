// Try reassigning a variable declared with `const` and observe the error

const x = 5; // declare x and assign 5 to it

console.log(x); // prints 5

x = 10; // assign 10 to x // error

// C:\30-Days-JS-Challenge\Day 1\Task_06.js:5
// x = 10; // assign 10 to x
//   ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\30-Days-JS-Challenge\Day 1\Task_06.js:5:3)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)     
//     at node:internal/main/run_main_module:28:49

// Node.js v20.10.0