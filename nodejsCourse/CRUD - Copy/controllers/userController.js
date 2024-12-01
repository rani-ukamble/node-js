// // userController.js
// const User = require('../models/userModel.js');

// exports.home = (req, res) => {
//     res.send("Hello World");
// };

// exports.createUser = async (req, res) => { 
//     try {
//         const { name, email } = req.body;

//         // Validate inputs (re-enabled)
//         if (!name || !email) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Name and email are required"
//             });
//         }

//         // Check if the user already exists (re-enabled)
//         const userExist = await User.findOne({ email });
//         if (userExist) {
//             return res.status(409).json({
//                 success: false,
//                 message: "User already exists"
//             });
//         }

//         // Create the new user
//         const user = await User.create({
//             name,
//             email
//         });

//         // Send success response
//         res.status(201).json({
//             success: true,
//             message: "User created successfully",
//             user
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: "Server error"
//         });
//     }
// };

// exports.getUsers = async (req, res) => {
//     try {
//         const users = await User.find({})
//         if (!users) {
//             res.status(400).json({
//                 success: false,
//                 message: error.message
//             })
//         }
//         res.status(200).json({
//             success: true,
//             users
//         })
//     }
//     catch (error) {
//         console.log(error);
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// exports.deleteUsers = async (req, res) => {
//     try {
//         const userName = req.params.name;

//         if (!userName) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User name is required"
//             });
//         }

//         const user = await User.deleteOne({ name: userName });


//         res.status(200).json({
//             success: true,
//             message: "User deleted successfully"
//         })

//     }
//     catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: "An error occurred while deleting the user",
//             error: error.message
//         })
//     }
// };

// exports.editUser = async (req, res)=>{
//     try{
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         if(!user){
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found"
//             }); 
//         }
//         res.status(200).json({
//             success: true,
//             message: "User updated successfully",
//             data: user  // Optionally return the updated user data
//         })
//     }
//     catch (error){
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: "An error occurred while deleting the user",
//             error: error.message
//         })
//     }
// }   


const User1 = require("../models/userModel.js");

exports.add = async (req, res)=>{
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

exports.search = async (req, res)=>{
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

exports.update = async (req, res)=>{
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

exports.deleteRec = async (req, res) => {
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



