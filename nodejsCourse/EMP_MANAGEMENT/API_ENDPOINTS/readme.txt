1. model

Controller

2. Router =>
    -express
    -router = express.Router()
    -require(model), validation



3. index.js =>
    -require(express, mongoose, ...)
    -require(routes)
    app = express()

    -app.use(/api, routes)
    -port
    -app.listen() 

4. dbconnect

