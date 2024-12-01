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
app.get("/calculator/", (req, res)=>{
    res.send("working")
}) 

app.get("/calculator/sum/:a/:b", (req, res) =>{
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    // let sum = a+b;
    res.send((a+b).toString());
});

app.get("/calculator/sub/:a/:b", (req, res)=>{
    let sub = parseFloat(req.params.a) - parseFloat(req.params.b)
    res.send(sub.toString())
}) 

app.get("/calculator/mult/:a/:b", (req, res)=>{
    let sub = parseFloat(req.params.a) * parseFloat(req.params.b)
    res.send(sub.toString())
})

app.get("/calculator/div/:a/:b", (req, res)=>{
    let sub = parseFloat(req.params.a) / parseFloat(req.params.b)
    res.send(sub.toString())
})


app.get("/app/mult", (req,res)=>{
    console.log(JSON.stringify(req.body,null,3));
    //method-1
    const {a, b} = req.body;
    let mult = a*b

    res.send(mult+"");
});

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