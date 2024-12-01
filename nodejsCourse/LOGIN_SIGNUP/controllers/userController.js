const Emp = require('../models/userModel.js') 
const bcrypt = require("bcrypt");
const { route } = require('../routes/userRoutes.js');

exports.dashboard = (req, res)=>{
    console.log("Welcome , welcome...")
    res.send("Welcome , welcome...");
}

exports.createEmp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name and email and password are required",
            });
        }

        // Check if the employee already exists
        const empExist = await Emp.findOne({ email }); // Use await here
        if (empExist) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }

        // Create the employee
        const hashedPass = await bcrypt.hash(password,10);
        const emp = await Emp.create({ 
            name, 
            email, 
            password:hashedPass 
        });

        return res.status(200).json({
            success: true,
            message: "Employee added successfully",
        });
    } catch (error) {
        console.error("Error occurred in createEmp:", error.message);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};


exports.getEmp = async (req, res)=>{
    try{
        const emps = await Emp.find({})
        if(!emps){
            res.status(400).json({
                success:false,
                message: error.message
            });
        }
        res.status(200).json({
            success:true,
            emps
        })
    }
    catch (error){
        res.status(500).json({
            success: false,
            message : "Server error"
        })
    }
} 


exports.updateEmp = async (req, res)=>{
    try{
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        const emp =await Emp.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!emp){
            res.status(400).json({
                success:false,
                message:"Emp not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Emp updated",
            emp
        });
    }
    catch{
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }
}

exports.deleteAllEmpByName = async (req, res) => {
    try {
        const name = req.params.name;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Employee name is required in the URL",
            });
        }

        const ans = await Emp.deleteMany({ name: name });

        if (ans.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: `No employees found with the name ${name}`,
            });
        }

        res.status(200).json({
            success: true,
            message: `All records with the name ${name} have been deleted`,
        });
    } catch (error) {
        console.error("Error deleting employees by name:", error.message);
        res.status(500).json({
            success: false,
            message: "Error deleting employees",
            error: error.message,
        });
    }
};


exports.loginEmp = async (req, res)=>{
    try{
        const {email, password} = req.body;

        if(!email || !password){
            res.status(400).json({
                success:false,
                message : "Email and password are required"
            })
        }

        const emailExist = await Emp.findOne({email})

        if(!emailExist){
            res.status(400).json({
                success:false,
                message:"Emp not exist"
            });
        }

        const passwordMatching = await bcrypt.compare(password, emailExist.password)

        if(!passwordMatching){
            res.status(400).json({
                success:false,
                message: "Invalid Credentials"
            })
        }

        res.status(200).json({
            success: true,
            message: "Login successful"
        })
    }
    catch (error){
        res.status(500).json({
            success:false,
            message: "Internal server error"
        })
    }
    
}


