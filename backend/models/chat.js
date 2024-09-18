const mongoose = require("mongoose")
const {model,Schema} = mongoose;

const chatSchema = new Schema({
    participant: [{
        type: mongoose.Types.ObjectId || String,
        ref:"User"
    }],
    messages: [],
    lastMessage: {}
})

const Chat = model("Chat",chatSchema)

module.exports = Chat