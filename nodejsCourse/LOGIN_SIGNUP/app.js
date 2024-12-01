require('dotenv').config();
const express = require("express") 
const app = express()

const cors = require("cors") 

const userRoutes = require("./routes/userRoutes.js"); 

// Init connection to db
const connectToDb = require("./config/db.js")

// In app.js
connectToDb()
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection failed:", err.message));


// middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors()) 

app.use('/', userRoutes);

module.exports = app; 


