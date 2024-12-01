const express = require("express")
const app = express()

const debug = require('debug')('app');
const morgan = require("morgan")

const path = require('path')


  
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/'))); 

app.get('/', (req, res)=>{
    res.send("working app")
})

app.listen(3000, ()=>{
     debug(console.log("running on port 3000 "));
})