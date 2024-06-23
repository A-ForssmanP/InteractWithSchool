const {model,Schema,Types, Model} = require("mongoose");

const scheduleSchema = new Schema({
    studentId:{
        type: Types.ObjectId, ref:"Student",
        required:true,
    },
    caring: {
        type: String,
        enum: ["Fritids", "Förskola"]
    },
    scheduledDays: []
})

const Schedule = model("Schedule",scheduleSchema)

module.exports = Schedule;