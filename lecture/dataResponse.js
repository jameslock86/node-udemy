const { log } = require('console');
const http = require('http');

const data = [
    {
        id:1,
        name:'john'
    },
    {
        id:2,
        name:'tim'
    },
    {
        id:3,
        name:'pam'
    },
    {
        id:4,
        name:'joe'
    }
]
const server = http.createServer((req, res) => {
    // log('first server');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Language', 'en-us');
    res.setHeader('Date',new Date(Date.now()));
    res.setHeader('X-Powered-By', 'Node.js');
    res.end(
       JSON.stringify( {
        success:true,
        results :data.length,
        data: data
    }))

});

server.listen(3000, ()=>{
    log('server is working yo');
});
