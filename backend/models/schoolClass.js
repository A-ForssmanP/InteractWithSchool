const mongoose = require("mongoose")
const {model,Schema} = mongoose;

const schoolClassSchema = new Schema({
    className: {
        type: String,
        required: true,
    },
    teacher: {
        firstName : {
            type: String,
            required: true,
        },
        lastName: String,
        mail: String,
        id:String
    },
    parents: [{
        firstName: {
            type:String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        mail: String,
        id: String
        }]
})

const SchoolClass = model("SchoolClass",schoolClassSchema)

module.exports = SchoolClass;