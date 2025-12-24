const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");


const app = express();
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://sahaya:Sahaya1905@moodtrackerapp.umudfef.mongodb.net/')


const UserSchema = new mongoose.Schema({
   name: { type: String, required: true, unique: true },
   password: { type: String, required: true }, // hashed
 });


const UserModel = mongoose.model("Users",UserSchema)


app.post("/signup", async (req, res) => {
   try {
     const { name, password } = req.body;
     if (!name || !password) {
       return res.status(400).json({ message: "Name and password required" });
     }


     const existing = await UserModel.findOne({ name });
     if (existing) {
       return res.status(409).json({ message: "User already exists" });
     }


     const hashed = await bcrypt.hash(password, 10);
     const user = new UserModel({ name, password: hashed });
     await user.save();


     return res.status(201).json({ message: "Signup success" });
   } catch (err) {
     console.error("/signup error:", err);
     return res.status(500).json({ message: "Server error" });
   }
 });


app.post("/login",(req,res)=>{
   const{Name,Password} = req.body
   UserModel.findOne({name:Name})
   .then(user =>{
       if(user){
           if(user.password === password){
               res.json("Login success")
           }else{
               res.json("Incorrect")
           }
       }else{
           res.json("Record does'nt exist")
       }
   })
})


app.listen(3001,()=>{
   console.log("Server is running..")
})


