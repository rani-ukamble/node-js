const mongoose = require('mongoose');

const studSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    marks: { type: String, required: true },  // Marks is a string (if you want it to be a number, adjust accordingly)
});

module.exports = mongoose.model('Student', studSchema);
