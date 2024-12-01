// require('dotenv').config(); 

// const express = require("express");
// const app = express();
// const cors = require("cors")


// // Express middleware -- execute before request
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.use(cors())


// const connectToDb = require('./config/db.js')


// // init connection to db
// connectToDb();

// const userRoutes = require('./routes/userRoutes.js')
    

// // app.get('/', userRoutes);
// app.use('/', userRoutes);

// module.exports = app;     



const express = require("express");
const cors = require("cors");

require('dotenv').config(); 

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));  

const connectToDb = require('./config/db.js');
connectToDb();

const useRoutes = require('./routes/userRoutes.js'); 


app.use('/user', useRoutes); 
app.use('/project', useRoutes);


module.exports = app;
