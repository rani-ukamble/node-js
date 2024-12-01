 const mongoose = require('mongoose');
 const {schema} = mongoose; 

 const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxLength: [20, "Name must be less than 20 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select : false
    },
    confirmPassword: {
        type: String,
        required: [true, "confirmPassword is required"]
    },
    forgotPasswordToken:{
        type: String
    },
    forgotPasswordExpiryDate:{
        type:String
    }, 
    Timestamps: {
        type: Date
    }
 })

 const userModel = mongoose.model('User', userSchema) 
 //'user' -> collection of userSchema format created

 module.exports = userModel;