const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const router=require('./src/routes/api')


//express app initialization
const app=express()
app.use(express.json())
dotenv.config()

//database connection with mongoose
// let URI='mongodb://127.0.0.1:27017/todos'
let URI='mongodb+srv://irfanhossain701:irfanhossain701@cluster0.hx69h.mongodb.net/todo_crud?retryWrites=true&w=majority'
let OPTION={user:'',  pass:''}
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})

//application routes
app.use('/v1/api',router)

//efault error handler

const errorHandler=(err,req,res,next)=>{
    if(res.headersSent){
        return next(err)
    }
    res.status(500).json({error:err})
}
 app.use(errorHandler)

app.listen(3000,()=>{
    console.log("App Run @ 3000")
})