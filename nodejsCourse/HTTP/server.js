// server with http module

const http = require("http");

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', "text/plain");
    res.end("Hello World")
}); 

server.listen(port, ()=>{
    console.log(`server running at ${host}: ${port}`)
})