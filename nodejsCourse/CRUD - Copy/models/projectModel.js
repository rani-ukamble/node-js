const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projId :{
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    investment:{
        type: Number,
        required: true,
    },
    client : {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    }

})

exports.module = mongoose.model("Project", projectSchema);