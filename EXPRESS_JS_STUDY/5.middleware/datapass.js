const express=require('express')//function
const app=express() //obj
const adminRouter=express.Router()


const loggerWrapper=(options)=>{
    function f(req,res,next) {
        if (options.log) {
            console.log(`${new Date(Date.now()).toLocaleString()}-${req.method} -${req.originalUrl} - ${req.protocol} - ${req.ip}`)
            next()
        }else{
            throw new Error("This Is ERROR")
        }

    }
}


const errorMiddleware=(err,req,res,next)=>{
    console.log(err.message)
    res.status(500).send('There Was A Server Side Error')
}

app.use('/admin',adminRouter)  //  admin/dashboard
adminRouter.use(loggerWrapper({log:true}))

adminRouter.use(errorMiddleware)

adminRouter.get('/dashboard',(req,res)=>{
    console.log('DASHBOARD')
    res.send("DASHBOARD")
})


app.listen(3000,()=>{
    console.log("APP RUN @ 3000")
})