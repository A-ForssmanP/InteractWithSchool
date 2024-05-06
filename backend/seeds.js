const mongoose = require("mongoose");
const User = require("./models/user")

mongoose.connect('mongodb://127.0.0.1:27017/interactWithSchool').then(()=>{
  console.log("CONNECTED TO DB!")
}).catch((err)=>{
  throw new Error(err)
})

const insertNewUser = async () => {
    const demoUser = new User({firstName:"Demo", lastName:"User"})
    try {
        await demoUser.save()
        const users = await User.find({})
        console.log(users)
    } catch (err) {
        console.log(err)
    }
}

insertNewUser()