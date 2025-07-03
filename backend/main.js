import express from "express";
import {questions1} from "./questions.js"
import jwt from "jsonwebtoken"
import auth from "./midleware.js"
import cors from "cors"
import blogs from "./blog.js";
const app = express();
const port = 3000;

app.use(cors())
app.use(express.urlencoded({ extended: true })); // for form submissions
app.use(express.json()); // for JSON payloads

var user =[
    {
    id: 1,
    username : "younus",
    password : "bhat"
    },
]

const JWT_SECRET = "secret"






var submissions = []

app.get("/blogs",(req,res)=>{
    res.json(blogs)
})

app.get("/problems",(req,res)=>{
    const filteredProblems = questions1.map( (x)=>({
        id:x.id,
        title:x.title,
        acceptance:x.acceptance,
        difficulty:x.difficulty,
    }))
    res.json({
        problems:filteredProblems
    })
})

app.get("/problems/:id",(req,res)=>{
    const cID = req.params.id;
    console.log(cID)
    const question = questions1.find(q=> q.id == cID)
    console.log(question)
    res.json(question)
})


app.get("/",(req,res)=>{
    console.log(user)
    res.send("heloo")
})


app.post("/signup", (req,res)=>{
    const Cusername = req.body.username
    const Cpassword = req.body.password
    var new_user = {
        id: user.length +1,
        username: Cusername,
        password: Cpassword
    }

    if (user.find((u)=> u.username === Cusername)){
        console.log("user already exists")
        return res.status(403).json({msg:"Email already exists."})
    }
    

    user.push(new_user);
    return res.json({
        msg:"success"
    })
})




app.post("/login",(req,res)=>{
    const currentUsername = req.body.username
    const currentPassword = req.body.password

    const current_user = user.find((u)=>u.username === currentUsername);

    if(!current_user){
        console.log("Username doesnot exists")
        return res.status(403).json({msg:"no user found"})
    }

    if((current_user.password !== currentPassword)){
            console.log("wrong password")
            res.status(403).json({msg:"incorect password"})
        }

    const token = jwt.sign({
        id : current_user.id
    },JWT_SECRET)

    console.log("login succesful")
    res.json({token})


})

app.get("/questions", (req,res)=>{
    res.render("questions.ejs",{questions: questions})
})
app.get("/submissions", (req,res)=>{
    res.render("submission.ejs")
})
app.post("/submissions", auth,(req,res)=>{
    const iscorrect = Math.random()<0.5;
    const problemId = req.body.id;
    const submission = req.body.submission;
    if (iscorrect){
        submissions.push({
            newSubmission: submission,
            problemId : problemId,
            // userId:req.userId,
            userId:1,
            status:"ac"
        })
        return res.json({
            status:"ac"
        })
    }else{
         submissions.push({
            newSubmission: submission,
            problemId : problemId,
            // userId:req.userId,
             userId:1,
            status:"wa"
        })
        return res.json({
            status:"wa"
        })
    }
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
