// module system in node.js user defined modules and built-in modules. Built-in modules are provided by Node.js and can be used without any additional installation, while user-defined modules are created by developers to organize and reuse code across different parts of an application.
// CommonJS module system is the default module system in Node.js. It uses the require function to import modules and the module.exports object to export them.


// Importing specific functions from another module using destructuring assignment. This allows us to use the add and subtract functions defined in local-1.js without having to reference the entire module object.
const myModule = require('./local-1');

//destruction assignment
// const {add, subtract} = require('./local-1');

// destructuring with aliasing
const {add:add1, subtract:sub1} = require('./local-2');

const result = myModule.add(5, 3);
console.log('Result:', result); // Output: Result: 8

const diff = myModule.subtract(5, 3);
console.log('Difference:', diff); // Output: Difference: 2


const result1 = add1(5, 3);
console.log('Result1:', result1); // Output: Result1: 8

const diff1 = sub1(5, 3);
console.log('Difference1:', diff1); // Output: Difference1: 2


// built-in module example
const fs = require('fs');


// asynchronous file read using fs module. It reads the contents of the specified file and logs it to the console. If there is an error during the file reading process, it logs the error instead.

fs.readFile('/text/data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

// Synchronous file read using fs module. It reads the contents of the specified file and logs it to the console. If there is an error during the file reading process, it catches the error and logs it.
// fs.readFileSync('/text/data.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File contents:', data);
// });


//asychronous file write using fs module. It writes the specified data to the specified file. If there is an error during the file writing process, it logs the error. Otherwise, it logs a success message.
// fs.writeFile('/text/data.txt', 'Hello, World!', 'utf8', (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//         return;
//     }
//     console.log('File written successfully');
// });

// Synchronous file write using fs module. It writes the specified data to the specified file. If there is an error during the file writing process, it catches the error and logs it. Otherwise, it logs a success message.
// try {
//     fs.writeFileSync('/text/data.txt', 'Hello, World!', 'utf8');
//     console.log('File written successfully');
// } catch (err) {
//     console.error('Error writing file:', err);
// }

//path  module example. It provides utilities for working with file and directory paths. In this example, it joins the current working directory with the specified path segments to create a complete file path.
// const path = require('path');
// const filePath = path.join(process.cwd(), '/text','data.txt');
// console.log('File Path:', filePath);

