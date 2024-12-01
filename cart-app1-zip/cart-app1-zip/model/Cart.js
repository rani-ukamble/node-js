const mongoose = require("mongoose");
const User = require("../model/User");
const Product = require("../model/Product");

const CartCollection = mongoose.Schema({
    "date":{
        type:Date,
        required:true
    },
    
    
    "user":{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    }, 

    "product":{
        type:[mongoose.Schema.Types.ObjectId],
        ref:Product,
        required:true
    }
});

mongoose.model("carts", CartCollection);

module.exports = mongoose.model("carts");



/*
{
    "cartid":1,
    "date":"09-Nov-2024",
    "user":Object("w8wefwehro38473o87"),
    "products":[
        Object("alkdfj0-r3e32"), 
        Object("alksjdfl93043")
    ]
}

*/