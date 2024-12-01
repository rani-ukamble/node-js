// userController.js
const User = require('../models/userModel.js');

exports.home = (req, res) => {
    res.send("Hello World");
};

exports.createUser = async (req, res) => { 
    try {
        const { name, email } = req.body;

        // Validate inputs (re-enabled)
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Name and email are required"
            });
        }

        // Check if the user already exists (re-enabled)
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        // Create the new user
        const user = await User.create({
            name,
            email
        });

        // Send success response
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        if (!users) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
        res.status(200).json({
            success: true,
            users
        })
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteUsers = async (req, res) => {
    try {
        const userName = req.params.name;

        if (!userName) {
            return res.status(400).json({
                success: false,
                message: "User name is required"
            });
        }

        const user = await User.deleteOne({ name: userName });


        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the user",
            error: error.message
        })
    }
};

exports.editUser = async (req, res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            }); 
        }
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user  // Optionally return the updated user data
        })
    }
    catch (error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the user",
            error: error.message
        })
    }
}