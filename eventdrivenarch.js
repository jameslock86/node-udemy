const { log } = require('console');
let events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', () =>{
    log("connection working");

})
eventEmitter.emit('connection');