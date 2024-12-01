const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    role: { type: String, required: true },
    dateOfJoining: { type: Date, required: true },
    salary: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
