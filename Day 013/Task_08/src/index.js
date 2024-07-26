// Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process

import { greet } from './module1';
import { farewell } from './module2';

console.log(greet());
console.log(farewell());


// npm run build

// > webpack@1.0.0 build
// > webpack

// asset main.js 589 bytes [emitted] [minimized] (name: main)
// runtime modules 663 bytes 3 modules
// cacheable modules 457 bytes
//   ./src/index.js 283 bytes [built] [code generated]
//   ./src/module1.js 83 bytes [built] [code generated]
//   ./src/module2.js 91 bytes [built] [code generated]
