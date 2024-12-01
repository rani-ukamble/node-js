const mongoose = require("mongoose");

const ProductCollection = mongoose.Schema({
    productname:{
        type:String,
        unique:true,
    },

    cost:{
        type:Number,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    mnfDate:{
        type:Date,
        default:Date.now()
    }
});

mongoose.model("products", ProductCollection);
module.exports = mongoose.model("products");