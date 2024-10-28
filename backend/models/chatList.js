const mongoose = require("mongoose")
const {Schema,model} = mongoose

const chatListSchema = new Schema({
    userId: {type:mongoose.Types.ObjectId,
        ref:"User",
        required:true},
    chats: [{type:mongoose.Types.ObjectId,
        ref:"Chat"
    }]
})

const ChatList = model("ChatList",chatListSchema)

module.exports = ChatList