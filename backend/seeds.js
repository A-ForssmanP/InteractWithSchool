const mongoose = require("mongoose");
const User = require("./models/user")
const Student = require("./models/student")

mongoose.connect('mongodb://127.0.0.1:27017/interactWithSchool').then(()=>{
  console.log("CONNECTED TO DB!")
}).catch((err)=>{
  throw new Error(err)
})



const insertNewUserandStudent = async () => {
  const students = [
    {firstName:"First",lastName:"Student"},
    {firstName:"Second",lastName:"Student"},
    {firstName:"Third",lastName:"Student"}
  ]

  try {
    const u = new User({firstName:"Demo", lastName:"User",password:"Kaffe"})
    await Student.insertMany(students)
    const stnts = await Student.find({})
    stnts.forEach((s,indx)=>{
      if(indx === 0 || indx === 2) {
        s.absence.isAbsence = false
      } else {
        s.absence.isAbsence = true
      }
        s.save()
    })
    u.students.push(...stnts)
    
        await u.save()
    } catch (err) {
        console.log(err)
    }
}


insertNewUserandStudent()
