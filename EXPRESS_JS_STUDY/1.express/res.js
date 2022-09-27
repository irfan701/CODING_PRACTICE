const express=require('express') //function
const cookieParser=require('cookie-parser') //function

const app=express()  // obj


app.use(express.json())
app.use(cookieParser())

app.set('view engine','ejs')

app.get('/h',(req,res)=>{
   
    console.log(res.headersSent)
    res.render('pages/home',{
        name:"Bangladesh"
    })
    console.log(res.headersSent)
    
})


app.get('/json',(req,res)=>{
    res.json({"name":"IRFAN"})
    res.status(200)
    res.sendStatus(200)
   
})



app.listen(3000,()=>{
    console.log("Listening On Port @ 3000")
})

/*
npm i ejs

'Content-Type':'application/json'
cookies=lang=en
res.locals
res.cookie()
res.clearCookie()
res.end() //without data & res end
res.send() //with data & res end
res.json()
res.status()
res.sendStatus() 
res.render() //view-template
res.location()
res.redirect()
res.get(HTTP HEAER Name)
*/