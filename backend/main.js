import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded())

var user =[
    {
    id: 1,
    username : "younus",
    password : "bhat"
    },
]

var questions = [
    {
        id:1,
        title :"Two states",
        description : "give an array return the maximum of array . ",
        testCases : [
            {
                input : "[1,2,3,4,5]",
                output: "5"
            }
        ]
    },
        {
        id:2,
        title :"Two states",
        description : "give an array return the minimun of array . ",
        testCases : [
            {
                input : "[1,2,3,4,5]",
                output: "1"
            }
        ]
    }
]


var submissions = []
app.get("/", (req,res)=>{
    res.render("index.ejs")
})
app.get("/signup", (req,res)=>{
    res.render("signup.ejs")
})

app.post("/signup", (req,res)=>{
    const Cusername = req.body.username
    const Cpassword = req.body.password
    var new_user = {
        id: user.length +1,
        username: Cusername,
        password: Cpassword
    }
    const current_user =  user.find((u)=> u.username === Cusername)
    console.log(Cusername)
    console.log(current_user)
    if (current_user){
        console.log("user already exists")

        res.redirect("/signup")
    }
    
    else{
        user.push(new_user);
        console.log(user)
        res.redirect("/questions")
    }
})


app.get("/login", (req,res)=>{
    res.render("login.ejs")
})

app.post("/login",(req,res)=>{
    const currentUsername = req.body.username
    const currentPassword = req.body.password

    const current_user = user.find((u)=>u.username === currentUsername);

    if (current_user){
        if (current_user.password === currentPassword){
            console.log("login succesful")
            res.redirect("/questions")
        }
        else{
            console.log("wrong password")
            res.redirect("/login")
        }
    }else{
        console.log("Username doesnot exists")
        res.redirect("/login")
    }
})

app.get("/questions", (req,res)=>{
    res.render("questions.ejs",{questions: questions})
})
app.get("/submissions", (req,res)=>{
    res.render("submission.ejs")
})
app.post("/submissions", (req,res)=>{
    const new_sub = req.body.submision
    submissions.push(new_sub)
    res.redirect("/questions")
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
