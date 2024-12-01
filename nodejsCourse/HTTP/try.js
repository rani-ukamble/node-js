const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url=='/') res.write("Hello Node js");

    res.end();
})

server.listen(5000, ()=>{console.log('running on port 5000')});

