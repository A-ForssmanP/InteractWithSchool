const mongoose = require("mongoose")
const {Schema,model} = mongoose

const userSchema = new Schema({
    firstName : {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    students: [{type: Schema.Types.ObjectId, 
        ref: 'Student'
    }]

})

const User = model("User", userSchema)

module.exports = User