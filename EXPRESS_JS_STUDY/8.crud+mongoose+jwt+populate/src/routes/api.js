const express=require('express')
const TodoController=require('./../controllers/TodoController')
const UserController=require('./../controllers/UserController')
const CheckLoginMiddleware=require('./../middlewares/CheckLoginMiddleware')
const router=express.Router();

//Get All The Todos
router.get("/",CheckLoginMiddleware,TodoController.GetTodo)

//Get A Todo By Id
router.get("/:id",TodoController.GetTodoById)

//POST TODO
router.post("/",CheckLoginMiddleware,TodoController.InsertTodo)

//POST MULTIPLE TODO
router.post("/all",TodoController.InsertManyTodo)

//PUT TODO
router.put("/:id",TodoController.UpdateTodoById)

//DELETE TODO

router.delete("/:id",TodoController.DeleteTodoById)

//User SignUp

router.post("/SignUp",UserController.SignUp)
router.post("/login",UserController.Login)
router.get("/UserDetails",UserController.GetUsers) //problem




module.exports=router

