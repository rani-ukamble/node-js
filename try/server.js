const http = require('http');

const server = http.createServer()
server.on('request', (req, res)=>{
    console.log(req.method)
})

server.listen(5000)