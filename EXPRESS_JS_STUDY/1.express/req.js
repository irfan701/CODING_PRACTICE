const express=require('express') //function
const cookieParser=require('cookie-parser') //function

const app=express()  // obj

app.use(express.json())
app.use(cookieParser())


app.get('/ip',(req,res)=>{
    res.send(req.ip)
    console.log(req.ip)
})

app.get('/protocol',(req,res)=>{
    res.send(req.protocol)
    console.log(req.protocol)
})

app.get('/secure',(req,res)=>{
    res.send(req.secure)
    console.log(req.secure)
})


app.get('/hostname',(req,res)=>{
    res.send(req.hostname)
    console.log(req.hostname)
})


app.get('/path',(req,res)=>{
    res.send(req.path)
    console.log(req.path)
})


app.get('/method',(req,res)=>{
    res.send(req.method)
    console.log(req.method)
})


app.post('/body',(req,res)=>{
    res.send(req.body)
    console.log(req.body)
})


app.get('/user/:id',(req,res,)=>{
    res.send(req.params)
    console.log(req.params);
})



app.get('/querystring',(req,res)=>{
    res.send(req.query)
    console.log(req.query);
})



app.get('/cookies',(req,res)=>{
    res.send(req.cookies)
    console.log(req.cookies);
})


app.get('/accepts',(req,res)=>{
    res.send(req.accepts('json'))
    console.log(req.accepts('json'));
})

app.get('/accepts',(req,res)=>{
    if(req.accepts('html')){
        res.render()
    }else{
        res.send('Hello World')
    }
})

app.get('/reqget',(req,res)=>{
   console.log(req.get('accept'))
    res.send(req.get('accept'))
})

app.listen(3000,()=>{
    console.log("Listening On Port @ 3000")
})

/*

req.ip
req.protocol
req.secure
req.hostname
req.path

req.method
req.body
req.params
req.query
req.cookies


*/