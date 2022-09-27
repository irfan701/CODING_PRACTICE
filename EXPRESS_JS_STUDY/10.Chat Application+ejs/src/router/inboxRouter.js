const InboxController=require("../controllers/InboxController");
const decorateHtmlResponse=require("../middlewares/decorateHtmlResponse");

const express=require('express')

const router=express.Router()

router.get('/',decorateHtmlResponse('Inbox'),InboxController.getInbox)



module.exports=router