const router = require("express").Router();
const Product = require("../model/Product");
const auth = require("../auth/AuthConfig");
const jwt = require('jsonwebtoken');


router.all("/", async (req, res) => {
    res.status(200).end(JSON.stringify({ status: "success", message: "Product Controller is working" }));
});


router.post("/mockproducts", async (req, res) => {
    try{
       const {data} = req.body;
       await Product.insertMany(data);    
       res.status(201).end(JSON.stringify({status:"success", message:`${data.length} products inserted to the database collection`}));

    }
    catch(error)
    {
        res.status(400).end(JSON.stringify({status:"failed", message:"Unhandled server exception", error:error}));
    }
})

router.get("/all", auth.authorize, async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).end(JSON.stringify({status:"success", data:products}));
    }
    catch(error){
        res.status(400).end(JSON.stringify({status:"failed", message:"Unhandled server exception", error:error}));
    }
})


module.exports = router;