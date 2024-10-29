if(process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
const express = require("express")
const {createServer} = require("node:http")
const {Server} = require("socket.io")
const cors = require("cors")
const app = express()
const server = createServer(app)
const io = new Server(server, process.env.NODE_ENV === "production" ?{
  cleanupEmptyChildNamespaces: true,
} :  {
  cors: {
    origin: process.env.VITE_SERVER,
    credentials:true
  }
})
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")

const User = require("./models/user")
const Student = require("./models/student")
const InboxMessage = require("./models/inboxMessage")
const Schedule = require("./models/schedule")
const Note = require("./models/note")
const SchoolClass = require('./models/schoolClass')
const ChatList = require("./models/chatList")
const Chat = require("./models/chat")

const isAuthenticated = require("./middleware/isAuthenticated")
const generateRandomName = require("./utils/generateRandomName")



//mongodb+srv://afpdev91:<password>@cluster0.tnv2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

if(process.env.NODE_ENV === "production") {
  mongoose.connect(`mongodb+srv://afpdev91:${process.env.ATLAS_PASSWORD}@cluster0.tnv2l.mongodb.net/interactWithSchool?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
    console.log("CONNECTED TO ATLAS-DB!")
  }).catch((err)=>{
    throw new Error(err.message)
  })
} else {
  mongoose.connect('mongodb://127.0.0.1:27017/interactWithSchool').then(()=>{
  console.log("CONNECTED TO DB!")
}).catch((err)=>{
  throw new Error(err)
})
}

const port =process.env.PORT || process.env.SERVER_PORT
const socketPort = 4000
const corsOptions = {origin: process.env.VITE_SERVER, optionsSuccessStatus: 200,credentials:true}
// const userId  = process.env.USER_ID

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("dist"))
app.use(cookieParser())
if(process.env.NODE_ENV !== "production") {
  app.use(cors(corsOptions))
}

// //socket server
// server.listen(socketPort)

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("userId",(id) => {
    socket.join(id)
  })
  socket.on("newMsg",(roomId,msg) => {
    socket.to(roomId).emit("newMsg", msg)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});



  app.get('/', (req, res) => {
    res.status(200).send('Welcome to server!')
  })

  app.post("/login", async (req,res) => {
    try {
        //get data from body
    const {username,password} = req.body
    //data in body is complete?
    if(!(username && password)) {
     return res.status(400).send("Användarnamn och/eller lösenord saknas" )
    }
    //check if user exists and validate password
    const user = await User.findOne({username:username})
    if(!user) {
      throw new Error("Ogiltigt användarnamn och/eller lösenord")
   }
    const hashedPassword = await bcrypt.compare(password,user.password)
    if(!user || !hashedPassword) {
       throw new Error("Ogiltigt användarnamn och/eller lösenord")
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
      return res.status(404).send(err.message)
    }
  })

  app.delete("/logout",isAuthenticated, (req,res) => {
    try {
      //delete cookies
      res.clearCookie("token")
      res.clearCookie("isAuthenticated")
      res.status(200).send()
    } catch(err) {
      res.status(404).send()
    }
  })

  app.post("/create_account",async (req,res) => {
    try{
    // get data out of body
    const { firstName, lastName, username, password } = req.body
    //check all data exists
    if(!(firstName && lastName && username && password)){
      return res.status(400).send("Fält saknas")
    }
    //check if userName allready exists
    const userExists = await User.findOne({username:username})
    if(userExists) {
       throw new Error("Användarnamnet är upptaget")
    }
    // hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    //create a new user
    const newUser = new User({firstName,lastName,username,password:hashedPassword})
    //create a new note and point user to it 
    const newNote = new Note({authorId:newUser})
    //create student,schedule,welcome-message and connect student and user to class and save to db
    const names = generateRandomName()
    let classes = await SchoolClass.find()
    names.forEach((name)=> {
        //create schedule
        const caringTypes = ["Fritids", "Förskola"]
        const randomNumber = Math.floor(Math.random()*2)
        const caring = caringTypes[randomNumber]
        const newSchedule = new Schedule({caring:caring})
        newSchedule.save()
        //create student
        const newStudent = new Student({firstName:name,lastName:newUser.lastName,schedule:newSchedule})
        //put student in a class
        const randomNum = Math.floor(Math.random()*classes.length);
        newStudent.schoolClass = classes[randomNum].id
        
        // connect user to parents field in the class
        classes[randomNum].parents.push({firstName:newUser.firstName,lastName:newUser.lastName,_id:newUser})
        classes[randomNum].save()
        // remove selected school class from classes array to prevent duplication
        classes = classes.filter(sclass => sclass !== classes[randomNum])
        newStudent.save()
        newUser.students.push(newStudent)
        //create welcome message
        const newMessage = new InboxMessage({
          studentId:newStudent,
          from:"Admin",
          title:"Välkommen!",
          text:`Välkommen,${newStudent.firstName}!`,
          opened:false,
        })
        newMessage.save()
      })
     //save user and note to db
    newUser.save()
    newNote.save()
    // chat list for user
    const chatList = new ChatList({userId:newUser})
    await chatList.save()
    //chat between user and all other created users
    const users = await User.find()
    for(let user of users) {
      if(user._id.toString() !== newUser._id.toString()) {
        const ownUser = {userId:newUser,firstName:newUser.firstName,lastName:newUser.lastName}
        const secondUser = {userId:user,firstName:user.firstName,lastName:user.lastName}
        const chat = new Chat({participants:[ownUser,secondUser]})
        await chat.save()
        const ownUserChatList = await ChatList.findOne({userId:newUser})
        const secondUserChatList = await ChatList.findOne({userId:user})
        ownUserChatList.chats.push(chat)
        await ownUserChatList.save()
        secondUserChatList.chats.push(chat)
        await secondUserChatList.save()
      }
    }
    // chat between user and all mock parents in the same school-class
     const user = await User.findById(newUser).populate("students","schoolClass")
     const schoolClassIds = user.students.map(studen => studen.schoolClass)
     for(let classId of schoolClassIds) {
      const schoolClass = await SchoolClass.findById(classId)
      for(let parent of schoolClass.parents) {
        if(parent._id.toString() !== user._id.toString() && !users.some(u => u._id.toString() === parent._id.toString())) {
          const ownUser = {firstName:user.firstName,lastName:user.lastName,userId:user}
          const parentUser = {firstName:parent.firstName,lastName:parent.lastName,userId:parent}
          const chat = new Chat({participants: [ownUser,parentUser]})
          await chat.save()
          const userChatList = await ChatList.findOne({userId:user})
          userChatList.chats.push(chat)
          await userChatList.save()
        }
      }
     }
      //create token
    const token = jwt.sign({userId: newUser._id},process.env.JWT_SECRET, { expiresIn: '30m'})
    //create token cookie
    res.cookie("token",token,{httpOnly:true})
    // create cookie that tells a user is authenticated
    res.cookie("isAuthenticated","true")
    res.status(200).send()
    } catch(err){
      console.log(err.message)
      res.status(404).send(err.message)
    }
  })

  app.get("/user",isAuthenticated, async (req,res) => {
    try{
      const {userId} = req
      const user = await User.findById(userId).populate("students") 
      if(!user) {
        throw new Error("Namn")
      }
      res.status(200).json({"user":user})
    } catch(err) {
      res.status(404).send(err.message)
    }
  })

  app.get("/class_list/all",isAuthenticated, async (req,res) => {
    try {
      // get userId out of req
      const {userId} = req
      //get user data
      const user = await User.findById(userId).populate("students");
      //create and object for each student with data of the student and its class
      const handleClassData = async () => {
        const data = []
        for(let student of user.students) {
          const schoolClass = await SchoolClass.findById(student.schoolClass)
          const classData = {
            student : student.firstName,
            class:schoolClass
          }
          data.push(classData)
        }
        return data
      }

      const classList = await handleClassData()
      res.status(200).json(classList)
    } catch(err) {
      console.log(err.message)
      res.status(400).json({"err": err.message})
    }
  })

  app.get("/inbox",isAuthenticated, async (req,res) => {
    try {
    const userId = req.userId
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

  app.get("/inbox/new_messages", isAuthenticated,async (req,res) => {
    try {
    const {userId} = req 
    const user = await User.findById(userId).populate("students") 
    if(!user) {
      throw new Error()
    }
    // get number of new inbox messages for each student
    let newMessages = 0
    for(let student of user.students) {
      const newInboxMessage = await InboxMessage.find({studentId:student,opened:false})
      newMessages += newInboxMessage.length
    }
    res.status(200).json({newMessages})
    } catch(err) {
      res.status(404).send()
    }

  })

  app.delete("/inbox/:id/delete",isAuthenticated,async (req,res) => {
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

  app.put("/inbox/:id/update",isAuthenticated,async (req,res) => {
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

  app.get("/chat/contact/all",isAuthenticated, async (req,res) => {
    try {
      const userId = req.userId
      const  chatList = await ChatList.findOne({userId: userId}).populate("chats").populate("userId",["_id","firstName"])
      const chatListData = {chats:chatList.chats,userData:chatList.userId,chatListId:chatList._id}
      res.status(200).json({"chatList":chatListData})
    } catch(err) {
      console.log(err.message)
      res.status(404).json({"error":err})
    }
  })

  app.put("/chat/:chatId",isAuthenticated, async (req,res) => {
    const {chatId} = req.params
    const messageData = req.body
    const userId = req.userId
    try {
    // get chat document
    const chat = await Chat.findById(chatId)
    //check if userId is one of the partipicipants
    const isParticipantUser = chat.participants.some(user => user.userId.toString() === userId)
    if(!isParticipantUser) {
      throw new Error("Invalid user")
    }
    // get id of the resiever user 
    const resiverUser = chat.participants.filter(user => user.userId.toString() !== userId)[0]
    //update message field on the chat document
    chat.messages.push(messageData)
    //update userShownNewEvent field on the chat document
    chat.userShownNewEvent = [userId]
    chat.save()
    // put updated chat to be first in chats array of the chatList document
    const chatList = await ChatList.findById(messageData.chatListId).populate("chats").populate("userId",["_id","firstName"])
    chatList.chats.remove(chat._id)
    chatList.chats.unshift(chat)
    chatList.save()
    // update chat to be first in chats array of the resiever user chatList document
    const resieverChatList = await ChatList.findOne({userId:resiverUser.userId})
    if(resieverChatList) {
    resieverChatList.chats.remove(chat._id)
    resieverChatList.chats.unshift(chat)
    resieverChatList.save()
    }
    const chatListData = {chats:chatList.chats,userData:chatList.userId,chatListId:chatList._id}
    //send back respons
    res.status(200).json({"chatList":chatListData})
    } catch(err) {
      //send back error status code
      res.status(404).json({"error":err.message})
    }
  })

  app.put("/chat/:chatId/userShownNewEvent",isAuthenticated, async (req,res) => {
    const {chatId} = req.params
    const {userId} = req
    const chat = await Chat.findById(chatId);
    // check if user is already in array
    const userExists = chat.userShownNewEvent.some(id => id.toString() === userId.toString())
    if(!userExists) {
      chat.userShownNewEvent.push(userId)
      chat.save()
    }
    const chatList = await ChatList.findOne({userId:userId}).populate("chats").populate("userId",["_id","firstName"])
    const chatListData = {chats:chatList.chats,userData:chatList.userId,chatListId:chatList._id}
    res.status(200).json({"chatList":chatListData})
  })

  app.get("/absence",isAuthenticated, async(req,res) => {
    try {
      const userId = req.userId;
      const user = await User.findById(userId).populate("students");
      res.send(user.students)
    } catch(err) {
      throw new Error(err)
    }
  })

  app.put("/absence/:id/register",isAuthenticated, async (req,res) => {
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

  app.get("/timeSchedule",isAuthenticated, async (req,res) => {
    try {
      const userId = req.userId
      const userPopulated = await User.findById(userId).populate("students");
      const students = userPopulated.students;
      res.json({studentsData:students})
    } catch(err) {
      throw new Error(err)
    }
  })
 
  app.get("/timeSchedule/:id",isAuthenticated, async (req,res) => {
    try{
        const userId = req.userId;
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

  app.post("/timeSchedule/:id",isAuthenticated, async (req,res) => {
    try {
      const userId = req.userId;
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

  app.get("/notes",isAuthenticated, async (req,res) => {
    try {
      const userId = req.userId;
      const note = await Note.findOne({authorId: userId})
      res.status(200).send(note.text)
    }catch(err) {
      res.status(404).json(err.message)
    }
  })

  app.put("/notes",isAuthenticated, async (req,res) => {
    const {updatedText} = req.body
    try {
      const userId = req.userId;
      const note = await Note.findOne({authorId: userId})
      note.text = updatedText
      note.save()
      res.status(200).send()
    } catch(err){
      res.status(404).json(err.message)
    }
  })

  // for render to health checks
  app.get("/healthz", (req,res) => {
    res.status(200).send()
  })

  app.get("/*", (req,res) => {
    res.redirect("/")
  })

app.listen(port,()=>{
console.log(`SERVER IS UP AND RUNNING ON PORT ${port}!`)
//socket server
server.listen(socketPort,() => {
  console.log(`SOCKET SERVER LISTENING ON PORT ${socketPort}`)
})
})