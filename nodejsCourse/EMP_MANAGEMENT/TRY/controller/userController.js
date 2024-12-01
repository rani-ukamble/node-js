const Stud = require('../model/userSchema.js');

// Function to Add an Employee
const addEmp = async (req, res) => {
    try {
        console.log("Request Body (Raw):", req.body);  // Log to check the incoming request

        const { firstName, email, marks } = req.body;

        // Validate input fields
        if (!firstName || !email || !marks) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check for duplicate email
        const existingEmp = await Stud.findOne({ email });
        if (existingEmp) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Create new employee record
        const newEmp = new Stud({ firstName, email, marks });
        const savedEmp = await newEmp.save();

        return res.status(201).json({
            success: true,
            message: "Employee added successfully",
            data: savedEmp,
        });
    } catch (error) {
        console.error("Error adding employee:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

const list = async (req, res) => {
    const ans = await Stud.find({});

    if (!ans) {
        return res.status(404).json({
            mess: "not found"
        })
    }

    return res.status(200).json({
        mes: "success",
        data: ans
    })
}

const updatestud = async (req, res) => {
    const { email } = req.params;
    const updatedFields = req.body;

    const ans = await Stud.findOneAndUpdate(
        { email },
        { $set: updatedFields },
        { new: true }
    )

    if (!ans) {
        return res.status(404).json({
            mes: "not found"
        })

    }

    return res.status(200).json({
        message: "Student updated successfully",
        data: ans
    });

}

const delStud = async (req, res) => {
    try {
        const { email } = req.params;

        // Check if the student exists
        const studExist = await Stud.findOne({ email });
        if (!studExist) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        // Delete the student from the database
        await Stud.findOneAndDelete({ email });

        // Return success response
        return res.status(200).json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting student:", error);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

const manyStudInsert = async (req, res)=>{ 
try{
    if(req.body.lenght===0 || !Array.isArray(req.body)){
        return res.status(404);
    }

    const newStud = Stud.insertMany(req.body);

    return res.status(201).json({
        success: true,
        message: "Students added successfully"
    });
} 
catch (error) {
    console.error("Error adding multiple students:", error);
    return res.status(500).json({ success: false, message: "Server error" });
}

}  




module.exports = { addEmp, list, updatestud, delStud, manyStudInsert};
