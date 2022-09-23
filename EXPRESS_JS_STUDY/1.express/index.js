const express=require('express')

const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello Programers")   
    console.log(req.body) 
})


app.post('/',(req,res)=>{
    res.send("This is Home Page With Post Request")
    console.log(req.body) 
    console.log(req.body.name) 
})

app.listen(3000,()=>{
    console.log("Listening On Port @ 3000")
})