const eventEmitter = require('events');
const customEmitter = new eventEmitter();
customEmitter.on('response', () =>{
    console.log(`data received`);
});

customEmitter.emit('response');