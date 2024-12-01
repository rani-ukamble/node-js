require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./config/db.js");


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

connectToDb();



const trafficRoutes = require('./routes/trafficRoutes.js')

app.use('/api/traffic', trafficRoutes);

module.exports = app;