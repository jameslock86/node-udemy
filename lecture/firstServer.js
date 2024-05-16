const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    // log('first server');
    res.end('first web server')

});

server.listen(3000, ()=>{
    log('server is working yo');
});
