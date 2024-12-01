const userModel = require('../model/userSchema.js')
const bcrypt = require("bcrypt")
const emailValidator = require("email-validator")

const signup = async (req, res, next)=>{
    const {name, email, password, confirmPassword} = req.body;

    const hashPass = await bcrypt.hash(password, 10) 

    if(!name || !email || !password || !confirmPassword){
        return res.status(400).json({
            success:false,
            message: "every field is required"
        })
    }

    const validEmail = emailValidator.validate(email);

    if(!validEmail){
        return res.status(400).json({
            success:false,
            message: "Please provide valid email id "
        })
    }

    if(password!==confirmPassword){
        return res.status(400).json({
            success:false,
            message: "password and Confirm Passwords are not matching"
        })
    }

    console.log(name, email, hashPass)
   
    try{
        const userInfo = new userModel({
            name, 
            email,
            password: hashPass,
            confirmPassword : hashPass
        });
        const result = await userInfo.save();


        return res.status(200).json({
            success:true,
            data: result
        })
    }
    catch(e){
        // duplicate entry error => status 11000
        if(e.code===11000){
            return res.status(400).json({
                success:false,
                message: "User already exist"
            })
        }

        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

module.exports = signup 