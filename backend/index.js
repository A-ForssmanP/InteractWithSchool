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

app.use(express.json())
app.use(express.urlencoded({extended: true}))
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

  app.delete("/inbox/:id/delete",async (req,res) => {
    const {id} = req.params
    const deletedMessage = await InboxMessage.findByIdAndDelete(id)
    const student = deletedMessage.studentId.toString()
    const messages = await InboxMessage.find({studentId: student})
    res.send(messages)
  })

  app.put("/inbox/:id/update",async (req,res) => {
    const {id} = req.params
   const updatedMessage = await InboxMessage.findByIdAndUpdate(id,{opened:true})
   const student = updatedMessage.studentId.toString()
    const messages = await InboxMessage.find({studentId: student})
    res.send(messages)
  })

  app.get("/absence", async(req,res) => {
    try {
      const user = await User.findById('6641142e63f31d9c7eb6980a').populate("students");
      res.send(user.students)
    } catch(err) {
      throw new Error(err)
    }
  })

  app.put("/absence/:id/register", async (req,res) => {
    try {
      const {data} = req.body
      const {id} = req.params
      const student = await Student.findByIdAndUpdate({_id: id})
      const date = new Date().toDateString()
      console.log(date, student.absence.prevAbsences[0])
      student.absence.prevAbsences.push(data)
      student.save()
      console.log(student.absence)
      res.send("Registrated!")
    } catch(err) {
      throw new Error(err)
    }
   
  })

app.listen(port,()=>{
console.log(`SERVER IS UP AND RUNNING ON PORT ${port}!`)
})