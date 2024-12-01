const router = require("express").Router();
const User = require("../model/User");
const Product = require("../model/Product");
const Cart = require("../model/Cart");


router.all("/", async (req, res) => {
    res.status(200).end(JSON.stringify({status:"success", message:"Cart Controller is working"}));
})

router.post("/create", async (req, res) => {
    try{
        const {date, user, products} = req.body;
        const userObject = await User.findOne({"email":user.email});
        if(!userObject)
            res.status(404).end(JSON.stringify({status:"failed", message:"User not found"}));
        
        let productsArray = [];
        for(var item of products)
        {
            const productObject = await Product.findById({"_id":item._id});

            if(productObject)
                productsArray.push(productObject);
        }

        const dataToSubmit = {
            date:date,
            user:userObject,
            product:productsArray
        };

        const cart = new Cart(dataToSubmit);
        cart.save();

        res.status(200).end(JSON.stringify({status:"success", message:"Cart is successfully created"}));
    }
    catch(error)
    {
        res.status(400).end(JSON.stringify({status:"failed", message:"Unhandled server exception", error:error}));
    }
});




router.get("/all", async (req,res) => {
    try{
        const data = await Cart.find({}).populate("user").populate("product");
        res.status(200).end(JSON.stringify({status:"success", data:data}));
    }
    catch(error){
        res.status(400).end(JSON.stringify({status:"failed", message:"Unhandled server exception", error:error}));
    }
})

router.get('/getemailprodcnt', async (req, res)=>{
    const cartsinfo = await Cart.find({}).populate("user").populate("product");

    if (!cartsinfo || cartsinfo.length === 0) {
        return res.status(404).end(JSON.stringify({
            status: "failed",
            message: "No cart data found"
        }));
    }

    const ans = cartsinfo.map(item=>({
        email : item.user.email,
        prodCnt : item.product.length
    }));

    res.status(200).json({
        success:true,
        data : ans
    })
})
 


module.exports = router;