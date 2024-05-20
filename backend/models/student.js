const {model, Schema} = require("mongoose")

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
    }
})

const Student = model("Student",studentSchema)

module.exports = Student