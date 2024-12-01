const mongoose = require("mongoose");

const UserCollection = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    createdOn:{
        type:Date,
        default:Date.now()
    },

    status:{
        type:Boolean,
        default:true
    }
});

mongoose.model("users", UserCollection);
module.exports = mongoose.model("users");