const express = require("express");
const app = express();
require("dotenv").config();
const database = require("./config/Database");
const auth = require("./auth/AuthConfig");
const bodyParser = require("body-parser");




//controller definition
const UserController = require("./controller/UserController");
const ProductController = require("./controller/ProductController");


let middleware = (req, res, next) => {
    database.connect_database()
        .then(response=>console.log(response))
        .catch(error=>console.log(error));
    next();
}

app.use(middleware);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use("/api/user", UserController);
app.use("/api/product", ProductController);



app.listen(process.env.PORT, ()=>console.log("Server is running on PORT number " + process.env.PORT));
