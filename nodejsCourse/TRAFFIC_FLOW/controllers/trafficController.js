
const TraficModel = require('../models/trafficModel.js')


const addMultiSurveys = async (req, res) => {
    try {
        const data = req.body;
        if (!Array.isArray(data) || data.length === 0) {
            return res.status(404).json({
                message: "all fields are required",
                data: data
            })
        }

        const ans = TraficModel.insertMany(data);
        return res.status(201).json({
            message: "all records added successfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const getByInterSection = async (req, res) => {
    try {
        const interSectionId = req.params.interSectionId;
        const foundSurvey = await TraficModel.find({ interSectionId });
        if (!foundSurvey || foundSurvey.length === 0) {
            return res.status(404).json({ message: "No record found" });
        }
        return res.status(200).json({
            success: "true",
            data: foundSurvey
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "server error"
        })
    }
}


const update = async (req, res) => {
    try {
        const interSectionId = req.params.id;
        const updatedData = TraficModel.updateMany({ id: interSectionId }, { $set: req.body }, { new: true });
        if (!updatedData) {
            return res.status(404).json({ message: "No record found" });
        }
        return res.status(200).json({
            success: "true",
            data: foundSurvey
        })

    }
    catch (error) {
        return res.status(500).json({
            message: "server error"
        })
    }

}



const getSummary = async (req, res) => {
    // try{
    const { roadName } = req.query;
    if (!roadName) {
        return res.status(400).json({
            success: false,
            message: "roadName query parameter is required."
        });
    }

    const finding = await TraficModel.find({ roadName: roadName });

    // res.send(JSON.stringify(finding), null, 3);

    if (!finding || finding.length === 0) {
        return res.status(400).json({
            success: false,
            message: "roadName not found."
        });
    }

    const totalVehicleCount = finding.reduce((pre, curr) => pre + curr.vehicleCount, 0);

    const peakTrafficTime = finding.reduce((pre, curr) => curr.vehicleCount > pre.vehicleCount ? curr : pre, finding[0])

    // const t = peakTrafficTime.timestamp
    //     ? peakTrafficTime.timestamp.split('T')[1]?.slice(0, 5)
    //     : "Unknown";
    // console.log(t)
    console.log(peakTrafficTime)
    const t = peakTrafficTime.timestamp
    const a = new Date(t)
    const formattedtime = a.toLocaleTimeString('en-US')
    console.log(formattedtime)
    return res.status(200).json({
        success: true,
        totalVehicleCount,
        lightState: peakTrafficTime.lightState,
        time: formattedtime
    });




    // }
    // // catch(error){
    //     return res.status(500).send(error)
    // }

}

module.exports = { addMultiSurveys, getByInterSection, update, getSummary }

