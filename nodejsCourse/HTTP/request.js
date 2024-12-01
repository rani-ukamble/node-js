// Server with http module

const http = require("http");
const { hostname } = require("os");
const path = require("path");

const options = {
    hostname: 'fakestoreapi.com',
    path:'/products/1',
    method: 'GET'
}

const apiReq = http.request(options, (apiRes)=>{
apiRes.on("data", (data)=>{
    console.log(data.toString());
});

apiRes.on("error", () => {
    console.log(e);
});
});

apiReq.end("error") 


