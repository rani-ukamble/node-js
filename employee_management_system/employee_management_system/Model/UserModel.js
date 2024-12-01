const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true,
    
    },
    department:{
        type:String,
        required:true
    },
    employeeID:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});

mongoose.model("employees",userSchema);

module.exports=mongoose.model("employees")