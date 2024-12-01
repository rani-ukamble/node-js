const Project = require('../models/projectModel.js');
const User1 = require("../models/userModel.js");

exports.addProject = async (req, res)=>{
    const data = req.body;
    if(!Array.isArray(data) || data.length===0){
        res.status(404).json({message:"Not found"});
    }
    const ans = await User1.insertMany(data);
    res.status(201).json({
        message: "successfully added",
        data: ans
    })
} 

exports.searchProject = async (req, res)=>{
    try{
        const id = req.params.id;
        const finding = await User1.find({id});
        if(!finding){
            return res.status(404).json("not found");
        }
        

        let ans = finding.map(item=>{
            return {id:id, name: item.name, salary: item.salary}
        })

        console.log(ans);
        return res.status(200).json({
            finding
         })
    
    }
    catch (error){
        res.status(500).json("server error");
    }
}

exports.updateProject = async (req, res)=>{
    const id = Number(req.params.id);
    const data = req.body;

    const finding = await User1.findOne({id});
    if(!finding){
        return res.status(404).json("not found");
    }

    const ans = await User1.findOneAndUpdate({id}, {$set: data}, {new : true});
    return res.status(200).json({
        data : ans
     })

}

exports.deleteProject = async (req, res) => {
    const id = Number(req.params.id); // Convert the id to a number if it's a number type

    try {
        // Find and delete the document based on the custom 'id' field
        const delRec = await User1.findOneAndDelete({ id });

        // If no record is found and deleted, return a 404 error
        if (!delRec) {
            return res.status(404).json({ message: "User not found" });
        }

        // If deletion is successful, return the deleted record
        return res.status(200).json({
            message: "User deleted successfully",
            data: delRec, // Send back the deleted record
        });
    } catch (error) {
        console.error("Error during deletion:", error);
        return res.status(500).json({ message: "Server error" });
    }
};



