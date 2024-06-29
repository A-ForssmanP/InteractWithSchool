const {model, Schema, Types} = require("mongoose")

const studentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    absence: {
        // isAbsence: Boolean,
        prevAbsences: []
    },
    schedule: {
        type:Types.ObjectId,
        ref:"Schedule"
    }
})

const Student = model("Student",studentSchema)

module.exports = Student