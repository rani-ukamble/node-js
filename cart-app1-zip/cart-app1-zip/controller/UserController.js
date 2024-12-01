const router = require("express").Router();
const User = require("../model/User");


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

module.exports = router;