const LoginController=require("../controllers/LoginController");
const decorateHtmlResponse=require("../middlewares/decorateHtmlResponse");

const express=require('express')

const router=express.Router()

router.get('/',decorateHtmlResponse("Login"),LoginController.getLogin)



module.exports=router