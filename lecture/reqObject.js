const { log } = require('console');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    // console.log(req, 'test');
    res.status(200).json({
        message:"all about request obj"
    });
    
});
app.post('/',(res, req)=>{
    log.apply(req.body);

})
app.listen(3000, () =>{
    log('Im working here');
});