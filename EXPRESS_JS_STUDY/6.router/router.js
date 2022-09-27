const express=require('express')
const router=express.Router()


const logMiddleware=(req,res,next)=>{
    console.log("I am logging something !")
    next()
}

router.param('userParam',(req,res,next,id)=>{
    req.userParam=id==='1'?'Admin':'Anonymous';
    next();
})

//router.all('*',logMiddleware())  //<=Must Be Order Main


router.get('/:userParam',(req,res)=>{
    res.send(  `Home ${req.userParam}`)
})



router.get('/home',(req,res)=>{
    res.send("Home Router")
})

router.get('/about',(req,res)=>{
    res.send("About Router")
})

//////////////////////////////////////
router
    .route("/user/xx")
    .all((req,res,next)=>{
        console.log("I AM LOGGING SOMETHING")
        next()
    })
    .get((req,res)=>{
        res.send("GET")
    })
    .post((req,res)=>{
        res.send("POST")
    })
    .delete((req,res)=>{
        res.send("DELETE")
    })
/////////////////////////////////////////
module.exports=router;
