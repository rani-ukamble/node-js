const express = require("express")
const authRouter = require('./router/authrouter.js')
const dbConnect = require("./config/databaseConfig.js")


const app = express();

dbConnect();

app.use(express.json())

app.use('/api/auth', authRouter)

app.use('/', (req, res)=>{
    res.status(200).json({data: 'JWTauth server'})
}) 


module.exports = app;

