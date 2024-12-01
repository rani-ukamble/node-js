const http = require("http")

const port = 3000
const host = 'localhost'

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello World');
        res.end();
    }
    else if (req.url === '/about') {
        res.write('AboutPage');
        res.end();
    }
    else if (req.url == '/product') {
        // /use fakeapi to redirect
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }

        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode=200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data.toString()))
                // console.log(data.toString());
            });

            apiReq.on("error", () => {
                console.log(e);
            });
            
        });
        apiReq.end("error");


    }
    else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.write("Page not found");
        res.end();
    }
});

server.listen(port, () => {
    console.log(`server running at ${host}: ${port}`)
})