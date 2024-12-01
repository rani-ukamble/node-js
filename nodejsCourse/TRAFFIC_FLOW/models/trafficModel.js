const mongoose = require("mongoose");

const trafficSurveySchema = new mongoose.Schema({
    interSectionId : {
        type: String,
        required: true,
        unique : true
    },
    vehicleCount:{
        type: Number,
        required: true
    },
    lightState: {
        type: String,
        enum : ['green', 'yellow', 'red'],
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    },
    roadName: {
        type: String, 
        required: true
    }

});

module.exports = mongoose.model("trafficSurvey", trafficSurveySchema);