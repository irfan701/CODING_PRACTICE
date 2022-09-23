const express=require('express') //function

const app=express()  // obj

app.use(express.json())
app.use(express.static(`${__dirname}/public/`))// http://localhost:3000/text/text.txt
app.use(express.static(`${__dirname}/public/`,{
    index:'home.html'
}))// http://localhost:3000/text


app.get('/',(req,res)=>{
    res.send("Hello Programers")   
    console.log(req.body) 
})


app.post('/',(req,res)=>{
    res.send("This is Home Page With Post Request")
    console.log(req.body)  //type of = object
    console.log(req.body.name) 
})

app.listen(3000,()=>{
    console.log("Listening On Port @ 3000")
})