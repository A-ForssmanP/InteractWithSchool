const mongoose = require("mongoose")
const {Schema,model} = mongoose

const userChatListSchema = new Schema({
    userId: {type:mongoose.Types.ObjectId,
        ref:"User",
        required:true},
    chats: [{type:mongoose.Types.ObjectId,
        ref:"Chat"
    }]
})

const UserChatList = model("UserChatList",userChatListSchema)

module.exports = UserChatList