const router= require("express").Router();
const { request } = require("express");
const user = require("../model/UserModel"); 
const bcrypt = require("bcryptjs");


router.all("/",(request,response) =>{
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({"status":"User Controller Working.."},null,3));
});
 

router.post("/create",async (req,res)=>{
    const hashPassword = bcrypt.hashSync(req.body.data.password, 10)
    const u= new user({
        username:req.body.data.username,
        password:hashPassword,
        email:req.body.data.email
    });
    
    u.save();
    res.end("user created")
});
 
router.get("/list",async (req,res)=>{
    const arr= await user.find();
    console.log(arr);
    res.status(200).end(JSON.stringify(arr));
})

router.get("/findone", async (req, res)=>{
    const array= await user.findOne({username: req.query.username});
    console.log(array);
    res.status(200).end(JSON.stringify(array));
        }
    );

router.put("/update", async (req, res)=>{
    if(user.query.email){
        const arr= await user.findOne({email:req.body.data.email})
        console.log(arr)
        res.send(200).end("Updated Successfully")
    }
    

})

// Delete all users by name
router.delete("/deleteByName/:name", async (req, res) => {
    try {
        const name = req.params.name;

        // Validate name
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Name parameter is required"
            });
        }

        // Delete users with the given name
        const result = await user.deleteMany({ username: name });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: `No users found with the name ${name}`
            });
        }

        res.status(200).json({
            success: true,
            message: `All users with the name ${name} have been deleted`
        });
    } catch (error) {
        console.error("Error deleting users by name:", error.message);
        res.status(500).json({
            success: false,
            message: "Error deleting users",
            error: error.message
        });
    }
});
 
module.exports = router