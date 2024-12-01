const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/signup1" ;

const dbConnect = () =>{
    mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((conn)=>console.log(`Connected to DB : ${conn.connection.host}`))
    .catch((err)=>{
        console.error(`Database connection failed: ${err.message}`);
        process.exit(1); // Exit the process if the connection fails
    })
}

module.exports = dbConnect;