node js
npm package
express, mongoose
basic express server
basic route > static response
Route(/signup, /sign in / juserinfo)
Controllers
Schema
Db connection
JWT Token  


npm i express cookie-parser bcrypt mongoose jsonwebtoken cors email-validator dotenv --save 

npm i nodemon  


app.js=> server created -> app.use(/)

index.js => import server-> listen 


1. Router=> /signup, POST, sign

2. Controller => signup()

3. App.js => /api/auth > 


npm i dotenv

4. databaseConfig.js => mongoose -> mongo_url -> dbConnect 

 app.js ->call  dbConnect();


5. schema 

    const userModel = mongoose.model('user', userSchema) 
    //'user' -> collection of userSchema format created 

