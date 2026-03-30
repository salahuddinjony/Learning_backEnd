// event emitter in node.js
const EventEmiter = require('events');
// instance of event emitter
const myEmitter = new EventEmiter();


// Registering an event listener for the 'birthday' event. When the 'birthday' event is emitted, the provided callback function will be executed, which logs a birthday message to the console.
myEmitter.on('birthday', (name,gift) => {
    console.log(`Happy birthday, ${name}! You received a ${gift}.`);
});
myEmitter.on('called', (name) => {
    console.log(`Hello, ${name}! You called the event.`);
});

// Emitting the 'birthday' event with the specified name and gift. This will trigger the event listener registered for the 'birthday' event, and the corresponding message will be logged to the console.
myEmitter.emit('birthday', 'Alice', 'new car');
myEmitter.emit('called', 'Bob');
