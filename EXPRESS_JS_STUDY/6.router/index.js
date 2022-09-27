const express=require('express')
const router=require('./router')

const app=express()

app.use('/admin',router)

app.listen(3000,()=>{
    console.log("App Run @ 3000")
})