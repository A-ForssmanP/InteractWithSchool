const mongoose = require("mongoose")
const {model,Schema} = mongoose

const notesSchema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId(),
        ref: "User"
    }
})

const Notes = model("Notes",notesSchema)

module.exports = Notes