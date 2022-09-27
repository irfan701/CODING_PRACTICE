const express=require("express")
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const path=require('path')
const cookieParser=require('cookie-parser')
const loginRouter=require('./src/router/loginRouter')
const usersRouter=require('./src/router/usersRouter')
const inboxRouter=require('./src/router/inboxRouter')

const {notFoundHandler,errorHandler}=require('./src/middlewares/ErrorHandlerMiddleware')

const app=express()
dotenv.config()


//Database Connection with Mongoose
let URI=process.env.MONGO_CONNECTION_STRING
let OPTION={user:'',  pass:''}
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})

//request parsers

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//set view engine
app.set('view engine','ejs')

//set static folder
app.use(express.static(path.join(__dirname,'public')))

//parse cookies middleware
app.use(cookieParser(process.env.COOKIE_SECRET))

//routing setup
app.use('/',loginRouter)
app.use('/users',usersRouter)
app.use('/inbox',inboxRouter)

//404 not found  handler
app.use(notFoundHandler)

//common error handler
app.use(errorHandler)

app.listen(process.env.PORT,()=>{
    console.log(`app listening to port ${process.env.PORT}`)
})