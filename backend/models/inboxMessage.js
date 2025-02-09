const mongoose = require("mongoose")
const {Schema,model,Types} = mongoose

const inboxMessageSchema = new Schema({
    studentId: {
        type: Types.ObjectId, ref:"Student"
    },
    from: {
        type: String,
        required: true
    },
    title: String,
    text: String,
    opened: {
        type: Boolean,
        required: true
    }
})

const InboxMessage = model("InboxMessage", inboxMessageSchema)

module.exports = InboxMessage