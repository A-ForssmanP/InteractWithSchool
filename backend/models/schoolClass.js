const mongoose = require("mongoose")
const {model,Schema} = mongoose;

const schoolClassSchema = new Schema({
    className: {
        type: String,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    },
    parents: [{
        type:Schema.Types.ObjectId,
        ref: "user"
        }]
})

const SchoolClass = model("SchoolClass",schoolClassSchema)

module.exports = SchoolClass;