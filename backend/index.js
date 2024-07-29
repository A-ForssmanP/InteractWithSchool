require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose');

const User = require("./models/user")
const Student = require("./models/student")
const InboxMessage = require("./models/inboxMessage")
const Schedule = require("./models/schedule")
const Note = require("./models/note")


mongoose.connect('mongodb://127.0.0.1:27017/interactWithSchool').then(()=>{
  console.log("CONNECTED TO DB!")
}).catch((err)=>{
  throw new Error(err)
})

const port = process.env.SERVER_PORT
const corsOptions = {origin: process.env.VITE_SERVER, optionsSuccessStatus: 200,credentials:true}
const userId  = process.env.USER_ID

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Welcome to server!!')
  })

  app.post("/login", async (req,res) => {
    try {
        //get data from body
    const {username,password} = req.body
    //data in body is complete?
    if(!(username && password)) {
     return res.status(400).send("Username or password is missing" )
    }
    //check if user exists and validate password
    const user = await User.findOne({username:username})
    if(!user || password !== user.password) {
      return res.status(404).send("Invalid Username or password")
    } else {
    //create token
    const token = jwt.sign({userId: user._id},process.env.JWT_SECRET, { expiresIn: '30m'})
     //send back token
     res.cookie("token",token,{httpOnly:true})
     // send back cookie that tells a user is authenticated
     res.cookie("isAuthenticated","true")
     res.send("Token and isAuthenticated cookies send!")
    }
    } catch(err) {
      return res.status(404).send("Something went wrong, please try again")
    }
  })

  app.get("/inbox", async (req,res) => {
    try {
    const user = await User.findById(userId).populate("students","firstName")
    const inbox = []
    for(let student of user.students) {
      const messages = await InboxMessage.find({studentId: student})
      inbox.push({name: student.firstName, messages: messages})
    }
    res.send(inbox)
  } catch(err) {
    throw new Error(err)
  }
  })

  app.delete("/inbox/:id/delete",async (req,res) => {
    try {
    const {id} = req.params
    const deletedMessage = await InboxMessage.findByIdAndDelete(id)
    const student = deletedMessage.studentId.toString()
    const messages = await InboxMessage.find({studentId: student})
    res.send(messages)
    } catch (err) {
      throw new Error(err)
    }
  })

  app.put("/inbox/:id/update",async (req,res) => {
    try {
          const {id} = req.params
   const updatedMessage = await InboxMessage.findByIdAndUpdate(id,{opened:true})
   const student = updatedMessage.studentId.toString()
    const messages = await InboxMessage.find({studentId: student})
    res.send(messages)
    } catch(err) {
      throw new Error(err)
    }

  })

  app.get("/absence", async(req,res) => {
    try {
      const user = await User.findById(userId).populate("students");
      res.send(user.students)
    } catch(err) {
      throw new Error(err)
    }
  })

  app.put("/absence/:id/register", async (req,res) => {
    try {
      const {data} = req.body
      const {id} = req.params
      const student = await Student.findById(id)
      data._id = new mongoose.Types.ObjectId
      data.status= "Granskas"
      student.absence.prevAbsences.push(data)
      student.save()
      res.send(true)
    } catch(err) {
      res.send(err)
      throw new Error(err)
      
    }
  })

  app.get("/timeSchedule", async (req,res) => {
    try {
      const userPopulated = await User.findById(userId).populate("students");
    const students = userPopulated.students;
    res.json({studentsData:students})
    } catch(err) {
      throw new Error(err)
    }
  })
 
  app.get("/timeSchedule/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(userId)
        const isValidStudentId = user.students.some((s)=>s.toString() === id)

       if(!isValidStudentId) {
          return res.status(404).send()
        }
        const student = await Student.findById(id).populate("schedule");
        res.json({student:student})
    } catch(err) {
      res.status(404).json({error:err})
    }
  
  })

  app.post("/timeSchedule/:id", async (req,res) => {
    try {
      const {data} = req.body;
      const {id} = req.params
      const user = await User.findById(userId)
      const isValidStudentId = user.students.some((s)=>s.toString() === id)

        if(!isValidStudentId) {
            return res.status(404).send()
          }
      const populated = await Student.findById(id).populate("schedule")
      const studentSchema = populated.schedule
      studentSchema.scheduledDays.push(...data)
      studentSchema.save()
      res.send("GOT DATA")
    } catch (err) {
      res.status(404).json({error:err})
    }
  })

  app.get("/notes", async (req,res) => {
    try {
      const note = await Note.findOne({authorId: userId})
      res.status(200).send(note.text)
    }catch(err) {
      res.status(404).json(err.message)
    }
  })

  app.put("/notes", async (req,res) => {
    const {updatedText} = req.body
    try {
      const note = await Note.findOne({authorId: userId})
      note.text = updatedText
      note.save()
      res.status(200).send()
    } catch(err){
      res.status(404).json(err.message)
    }
  })

app.listen(port,()=>{
console.log(`SERVER IS UP AND RUNNING ON PORT ${port}!`)
})