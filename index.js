const express = require('express');
const app = express();
const PORT = 9999 | process.env.PORT;


app.get('/', (req, res, next) =>{
    console.log(req.query);
    res.send();
});

app.listen(PORT, ()=>{
    console.log(`server start ${PORT}`);
});