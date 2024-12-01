require('dotenv').config(); 

const express = require("express");
const app = express();
const cors = require("cors")


// Express middleware -- execute before request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())


const connectToDb = require('./config/db.js')


// init connection to db
connectToDb();

const userRoutes = require('./routes/userRoutes.js')
    

// app.get('/', userRoutes);
app.use('/', userRoutes);

module.exports = app;   