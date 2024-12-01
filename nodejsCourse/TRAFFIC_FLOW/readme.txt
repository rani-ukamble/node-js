fetch data from database : use promises or async - await  



const TrafficSurvey = require("./trafficSurveySchema");
const moment = require("moment");

// GET /api/traffic/summary
exports.getTrafficSummary = async (req, res) => {
    try {
        // Extract query parameters (e.g., roadName)
        const { roadName } = req.query;

        // Validate query parameters
        if (!roadName) {
            return res.status(400).json({
                success: false,
                message: "roadName query parameter is required."
            });
        }

        // Query traffic data filtered by roadName
        const trafficData = await TrafficSurvey.find({ roadName });

        // Handle case when no data is found
        if (!trafficData || trafficData.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No traffic data found for roadName: ${roadName}`
            });
        }

        // Calculate total vehicle count
        const totalVehicleCount = trafficData.reduce((acc, item) => acc + item.vehicleCount, 0);

        // Find peak traffic time and corresponding light state
        const peakTrafficEntry = trafficData.reduce((peak, current) => {
            return current.vehicleCount > peak.vehicleCount ? current : peak;
        }, trafficData[0]);
        const peakTrafficTime = moment(peakTrafficEntry.timestamp).format("hh:mm A");

        // Send response
        return res.status(200).json({
            roadName,
            totalVehicleCount,
            peakTrafficTime,
            lightState: peakTrafficEntry.lightState
        });
    } catch (error) {
        console.error("Error in getTrafficSummary:", error);
        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
