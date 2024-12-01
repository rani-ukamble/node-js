const express= require("express");
require("dotenv").config();
const database =require("./Database")
const bodyParser= require("body-parser")
const userController = require("./Controller/UserController")

const app =express();
const port = process.env.PORT;

let middleware = (request,response,next) =>{
    database.connectMongoDb().then((arg) =>{
        console.log('Connection Status : ' + arg);
    }).catch((error) =>{
        console.log(error);
    });

    next();
}

app.use(express.json());
app.use(middleware);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/api/user", userController)

app.get("/connect",middleware,(req,res) =>{
    res.send("request recieved")
})

app.listen(port,()=>{
    "Connected to database"
})


