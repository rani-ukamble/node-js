const router = require("express").Router();
const User = require("../model/User");
const auth = require("../auth/AuthConfig");


router.all("/", async (req, res)=>{
    res.status(200).end(JSON.stringify({status:"success", message:"Http Request successfully submitted to User Controller"}));
})


router.post("/mockusers", async (req, res)=>{
    try{
        if(req.body.users)
        {
            User.insertMany(req.body.users);
            res.status(200).end(JSON.stringify({status:"success", message:`${req.body.users.length} users inserted in database collection`}));
        }
        else
        {
            res.status(400).end(JSON.stringify({status:"failed", message:"empty users list or invalid data"}));
        }
    }
    catch(error)
    {
        res.status(500).end(JSON.stringify({status:"failed", message:"Unhandled Server Error", error:error}));
    }
})


router.post("/signup", async (req,res)=>{
    try{
        const user = new User(req.body.data);
        await user.save();
        res.status(200).end(JSON.stringify({status:"success", message:'Signup successfull'}));

    }
    catch(error)
    {
        res.status(500).end(JSON.stringify({status:"failed", message:"Unhandled Server Error", error:error}));
    }
})


router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({email:req.body.data.email, password:req.body.data.password});
        console.log(user);
        if(user)
        {
            const token = auth.createToken(user);
            res.status(200).end(JSON.stringify({status:"success", message:'login successfull', credentials:{token:token}  }));
        }
        else
        {
            res.status(401).end(JSON.stringify({status:"failed", message:"Invalid username and password"}));
        }
    }
    catch(error)
    {
        res.status(500).end(JSON.stringify({status:"failed", message:"Unhandled Server Error", error:error}));
    }
})

module.exports = router;