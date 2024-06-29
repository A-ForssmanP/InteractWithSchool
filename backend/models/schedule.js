const mongoose = require("mongoose")
const {Schema,model} = mongoose

const scheduleSchema = new Schema({
    // studentId:{
    //     type: Types.ObjectId, ref:"Student",
    //     required:true,
    // },
    caring: {
        type: String,
        enum: ["Fritids", "Förskola"],
        required: true,
    },
    scheduledDays: []
})

const Schedule = model("Schedule",scheduleSchema)

module.exports = Schedule;