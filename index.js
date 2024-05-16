// for(let i= 0; i<10; i++){
// console.log(i);
// }

// const { log } = require('console');
let fs = require ('fs');

// let data = fs.readFileSync('example.txt');

// console.log(data.toString());

fs.readFileSync('example.txt', (error, data) => {
    if(error) return console.log(error);
    console.log(data.ToString());
})


console.log('done yo');