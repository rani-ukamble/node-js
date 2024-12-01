const router= require("express").Router();
const user= require('../Model/UserModel')
const bcrypt= require("bcryptjs")



router.all("/",(request,response) =>{
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({"status":"User Controller Working.."},null,3));
    
});

router.post('/create',async (req,res)=>{
    if(req.body.data){
        await user.insertMany(req.body.data);
        res.status(200).end("User Created");      
    }
    else{
        res.status(400).end("Invalid syntax");
    }
    
});

router.get('/list',async (req,res)=>{
    const arr= await user.find();
    console.log(arr);
    res.status(200).end(JSON.stringify(arr))
})

router.put('/update/:id',async(req,res)=>{
    const _user=await user.findOne({id:req.params.id});
    if(_user){
        const updated= req.body.data;
        await user.findOneAndUpdate({id:req.params.id},{$set:updated});
        res.status(200).end("User Updated");
    }
    else{
        res.status(404).end("User not found");
    }
});

router.delete('/delete/:id', async(req,res)=>{
    const _user= await user.find({id:req.params.id});
    if(_user){
        await user.deleteOne({id:req.params.id});
        res.status(200).end("User deleted");

    }
    else{
        res.status(404).end("User not found")
    }
});


module.exports= router;