const mongoose = require("mongoose")
const {model,Schema} = mongoose;

const chatSchema = new Schema({
    participants: [{
        userId:{ 
            type: mongoose.Types.ObjectId || String,
            ref:"User"},
        firstName: {
            type:String,
            required:true
        },
        lastName: {
            type:String,
            required:true
        }
    }],
    messages: [],
    lastMessage: {},
    userShownNewEvent: [{
        type:mongoose.Types.ObjectId,
    }]
})

const Chat = model("Chat",chatSchema)

module.exports = Chat