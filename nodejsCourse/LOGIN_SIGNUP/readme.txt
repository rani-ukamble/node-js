CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to prevent malicious websites from accessing resources and data from another domain without permission. It allows or restricts web pages from making requests to a domain different from the one that served the web page.

npm install bcrypt



const bcrypt = require("bcrypt");

exports.updateEmp = async (req, res) => {
    try {
        // Validate the request body
        const { name, email, password } = req.body;

        // Find the employee by ID
        const emp = await Emp.findById(req.params.id);
        if (!emp) {
            return res.status(404).json({
                success: false,
                message: "Employee not found",
            });
        }

        // Update fields only if they are provided
        if (name) emp.name = name;
        if (email) emp.email = email;

        // Hash the new password if it's being updated
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            emp.password = hashedPassword;
        }

        // Save the updated employee
        const updatedEmp = await emp.save();

        return res.status(200).json({
            success: true,
            message: "Employee updated successfully",
            emp: updatedEmp,
        });
    } catch (error) {
        console.error("Error updating employee:", error.message);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};
 

 multer=>



 