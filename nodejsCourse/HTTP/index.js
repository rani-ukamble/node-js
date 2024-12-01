const http = require("http");

const PORT = 5000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
    res.setHeader('X-Powered-By', 'Node.js'); // Example of setting another header
    res.setHeader('Cache-Control', 'no-store'); // Disable caching for this response

    // Handle the root URL '/'
    if (req.url == '/') {
        res.end('Node Server created by Rani Kamble!');
    } 
    else {
        // For any other URL, you can send a 404 Not Found response
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
