const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    // log('first server');
    res.end(
       JSON.stringify( {
        message: 'data us sent'
    }))

});

server.listen(3000, ()=>{
    log('server is working yo');
});
