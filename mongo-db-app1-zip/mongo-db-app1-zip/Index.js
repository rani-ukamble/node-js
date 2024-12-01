const express = require("express");
const bodyParser = require("body-parser")
const userController = require("./controller/UserController")

const app = express();
require("dotenv").config();
const database = require("./Database");


let middleware = (req, res, next) => {
    console.log("middleware execution started.");
    database.connect_database()
        .then(response=>console.log(response))
        .catch(error=>console.log(error));

    console.log("middleware execution ends here.");
    next();
}

app.use(middleware);
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/api/user", userController)


app.get("/connect", middleware, (req, res)=> {
    res.send("request received");
});

app.listen(process.env.PORT, ()=>console.log("Server is running on PORT number " + process.env.PORT));
