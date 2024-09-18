const mongoose = require("mongoose")
const {model,Schema} = mongoose;

const chatSchema = new Schema({
    participant: [{
        type: mongoose.Types.ObjectId,
        ref:"User"
    }],
    messages: [],
    lastMessage: {}
})

const Chat = model("Chat",chatSchema)

module.exports = Chat