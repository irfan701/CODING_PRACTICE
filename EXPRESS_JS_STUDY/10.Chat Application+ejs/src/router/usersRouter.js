const UsersController=require("../controllers/UsersController");
const decorateHtmlResponse=require("../middlewares/decorateHtmlResponse");

const express=require('express')

const router=express.Router()

router.get('/',decorateHtmlResponse('Users'),UsersController.getUsers)



module.exports=router