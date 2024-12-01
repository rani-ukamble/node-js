const Employee = require('../model/userSchema');

exports.addEmp = async (req, res) => {
    try {
        const { firstName, lastName, email, department, role, dateOfJoining, salary } = req.body;

        // Create a new Employee instance
        const empInfo = new Employee({ firstName, lastName, email, department, role, dateOfJoining, salary });

        // Save the Employee to the database
        const result = await empInfo.save();

        return res.status(200).json({
            success: true,
            message: "Employee added successfully",
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error adding employee",
            error: error.message,
        });
    }
};
