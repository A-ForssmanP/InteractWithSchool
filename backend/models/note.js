const mongoose = require("mongoose")
const {model,Schema} = mongoose

const notesSchema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    text: String,
})

const Note = model("Note",notesSchema)

module.exports = Note