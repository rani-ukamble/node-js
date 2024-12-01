const express = require("express") 
const bodyParser = require('body-parser')
//command : npm i g nodemon
//command : npm i body-parser

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json
app.use(bodyParser.json())



// send works for only string or objects==> use toString()

app.get("/convert/", (req, res)=>{
    res.send("converting")
}) 


app.get("/convert/mb", (req,res)=>{
    console.log(JSON.stringify(req.body,null,3));
    //method-1
    const {value, to} = req.body;
    let ans = 1024*value

    res.send({"gb": value, "mb": ans} );
});

// app.get("/convert/kb", (req, res)=>{
//     const {value, to} = req.body;
//     let ans = 1048576*value

//     res.send(ans+"");

// })

// app.get("/convert/bytes", (req, res)=>{
//     const {value, to} = req.body;
//     let ans = 1073741824*value

//     res.send(ans+"");

// })

// app.get("/convert/bits", (req, res)=>{
//     const {value, to}= req.body;
//     let ans = 8589934592 * value
//     res.send(ans+"")
// }) 


app.get("convert/:unit", (req, res)=>{
    const {value, to} = req.body
    switch(unit){
        
    }
})

app.listen(5454);


//localhost:8080/convert/gb


// task
// body json{
// value :1,
// to : "mb"
// } 

// output:
// {"gb": 1, "mb": 1024} 


// gb, kb, bytes, bits 


// 1 GB =
// 1,024 MB (megabytes)
// 1,048,576 KB (kilobytes)
// 1,073,741,824 bytes
// 8,589,934,592 bits