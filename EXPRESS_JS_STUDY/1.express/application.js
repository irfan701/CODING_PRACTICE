const express=require('express') //function

const app=express()  // obj

app.enable('case sensitive routing')
app.disable('case sensitive routing')

app.all('/about',(req,res)=>{
    res.send("This is Home Page With Post Request")
  
})
//STEP 1:
/////////  IT WILL BE 1st EXECUTE LIKE MIDDLEWARE //////
app.param('id',(req,res,next,id)=>{
//process
const user={
    userId:id,
    name:"Bangladesh"
}
  req.UserDetails=user //req object er moddey intersect korey dokiye dilam
    next();


})

//STEP 2 :
app.get('/user/:id',(req,res,)=>{

    res.send("Welcome to application home !")
    console.log(req.UserDetails);
})
//////////////////////////////////////////////////////////


//app.route

app.route('/invoice/show')
.get((req,res)=>{
    res.send("This is Home GET")
})
.post((req,res)=>{
    res.send("This is Home Post")
})
.put((req,res)=>{
    res.send("This is Home Put")
})

//equvalent to
/*
app.get('/invoice/show',(req,res)=>{

})

app.post('/invoice/show',(req,res)=>{

})

app.put('/invoice/show',(req,res)=>{

})
*/
////////////////////////////////////////////

app.listen(3000,()=>{
    console.log("Listening On Port @ 3000")
})