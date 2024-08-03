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
        }
    },
    parents: [{
        firstName: {
            type:String,
            required:true
        }
        }]
})

const SchoolClass = model("SchoolClass",schoolClassSchema)

module.exports = SchoolClass;