const express=require('express')//function

const cookieParser=require('cookie-parser')

const app=express() //obj


const adminRouter=express.Router()

adminRouter.get('/dashboard',(req,res)=>{
    console.log('DASHBOARD')
    res.send("DASHBOARD")
})



/////////////APPLICATION LEVEL MIDDLEWARE ///////////////
//define korce
const myMiddleware=(req,res,next)=>{
    console.log("I AM LOGGING ")
    next();
}

const logger=(req,res,next)=>{
console.log(`${new Date(Date.now()).toLocaleString()}-${req.method} -${req.originalUrl} - ${req.protocol} - ${req.ip}`)

    //res.send("HELLO STOP HERE") //send and res end ;don't go the next level...
    //res.end()
  // next()

    throw new Error("This Is ERROR") //STEP 1
}

const errorMiddleware=(err,req,res,next)=>{
    console.log(err.message)
    res.status(500).send('There Was A Server Side Error')
}

//use kortey hobey
app.use(myMiddleware)
app.use(logger)
app.use(errorMiddleware)
/////////////APPLICATION LEVEL MIDDLEWARE ///////////////

/////////////ROUTE LEVEL MIDDLEWARE ///////////////
app.use('/admin',adminRouter)  //  admin/dashboard
adminRouter.use(logger)
adminRouter.use(errorMiddleware)
/////////////APPLICATION LEVEL MIDDLEWARE ///////////////

app.use(cookieParser()) //3rd party midleware
app.use(express.json()) //building middleware

app.get('/about',(req,res)=>{
    res.send("ABOUT")
    console.log("ABOUT")
})



app.listen(3000,()=>{
    console.log("APP RUN @ 3000")
})