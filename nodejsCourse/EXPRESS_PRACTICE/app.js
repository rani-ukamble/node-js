const express = require("express")

const app = express()

const PORT = 5000;
const HOSTNAME = 'localhost';

app.get('/', (req, res)=>{
    res.send("Hello World");
});

app.get('/about', (req, res)=>{
    res.send("About Page");
});

app.listen(PORT,()=>{
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
}) ;