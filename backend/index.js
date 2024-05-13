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

  app.get("/inbox/:index", async (req,res) => {
    const user = await User.findOne({_id:'6641142e63f31d9c7eb6980a'}).populate("students","firstName")
    const inboxData = []
    user.students.forEach(async(s)=>{
     const msgs = await InboxMessage.find({studentId:s._id})
     inboxData.push("ddsd")
    //  console.log(msgs)
    })
    console.log(inboxData)
    res.send(inboxData)
  })

app.listen(port,()=>{
console.log(`SERVER IS UP AND RUNNING ON PORT ${port}!`)
})