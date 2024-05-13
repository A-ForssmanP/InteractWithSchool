require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require('mongoose');
const User = require("./models/user")
const Student = require("./models/student")
const InboxMessage = require("./models/inboxMessage")


mongoose.connect('mongodb://127.0.0.1:27017/interactWithSchool').then(()=>{
  console.log("CONNECTED TO DB!")
}).catch((err)=>{
  throw new Error(err)
})

const port = process.env.SERVER_PORT
const corsOptions = {origin: process.env.VITE_SERVER, optionsSuccessStatus: 200}


app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Welcome to server!!')
  })

  app.get("/inbox", async (req,res) => {
    const user = await User.findById('6641142e63f31d9c7eb6980a').populate("students","firstName")
    const inbox = []
    for(let student of user.students) {
      const messages = await InboxMessage.find({studentId: student})
      inbox.push({name: student.firstName, messages: messages})
    }
    res.send(inbox)
  })

app.listen(port,()=>{
console.log(`SERVER IS UP AND RUNNING ON PORT ${port}!`)
})