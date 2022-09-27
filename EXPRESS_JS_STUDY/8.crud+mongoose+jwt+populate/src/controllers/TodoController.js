const TodoModel=require('./../models/TodoModel')
const UserModel=require('./../models/UserModel')

exports.GetTodo=(req,res)=>{
    console.log(req.username)
    console.log(req.userId)

      TodoModel.find({},(err,data)=>{
        if (err){
            res.status(400).json({status:"fail",data:err.toString()})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    }).populate('user',"name username -_id")

}

exports.InsertTodo=async (req,res)=>{
    try {

        let reqBody = {
            ...req.body,
            user:req.userId
        };

        let data = await TodoModel.create(reqBody)
        await UserModel.updateOne({_id:req.userId},{$push:{todos:data._id}})
        res.status(201).json({status:"success",data:data})
    }catch (e) {
        res.status(400).json({status:"fail",data:e.toString()})
    }
}

exports.InsertManyTodo=async (req,res)=>{
    try {
        let reqBody = req.body;
        let data = await TodoModel.insertMany(reqBody)
        res.status(200).json({status:"success",data:data, message:"Todos were inserted successfully !"})
    }catch (e) {
        res.status(500).json({status:"fail",data:e.toString(),error:'There was a server side error!'})
    }
}

exports.GetTodoById=(req,res)=>{
    let _id = req.params.id;

    TodoModel.aggregate([
        {$match:{_id:_id}}

        ],(err,data)=>{
        if (err){
            res.status(400).json({status:"fail",data:err.toString()})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.DeleteTodoById=(req,res)=>{
    let _id = req.params.id;

    TodoModel.deleteOne({_id:_id},(err,data)=>{
        if (err){
            res.status(400).json({status:"fail",data:err.toString()})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UpdateTodoById=async (req,res)=>{
    try {
        let _id = req.params.id;
        let PostBody=req.body;
        let data = await TodoModel.findByIdAndUpdate({_id:_id},{$set:{
                status:'active'     //HardCode
            }},{new:true})
        res.status(200).json({status:"success",data:data})
    }catch (e) {
        res.status(500).json({status:"fail",data:e.toString()})
    }

}
/*
///////////// JS FUNDAMENTAL ////////////
https://www.youtube.com/watch?v=93Styj1K9fY
    https://www.youtube.com/watch?v=5ckmCW8png0
        https://www.youtube.com/watch?v=uZqyRJkTQog
            https://www.youtube.com/watch?v=UwrmEUCaAIY
                https://www.youtube.com/watch?v=IUBd76UQb34
///////////////////////////////////////////////////


 */