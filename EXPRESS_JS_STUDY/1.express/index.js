const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send("Hello Programers")    
})


app.get('/about',(req,res)=>{
    res.send("This Is About Page")
})

app.listen(3000,()=>{
    console.log("Listening On Port @ 3000")
})