const {model,Schema,Types, Model} = require("mongoose");

const ScheduleSchema = new Schema({
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

const Schedule = model("Schedule",ScheduleSchema)

module.exports = Schedule;