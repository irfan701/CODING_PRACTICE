const mongoose=require("mongoose")
const userSchema=mongoose.Schema({

    name:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    status:{type: String,enum:["active","inactive"]},
    date:{type:Date,default:Date.now()},
    todos:[{type:mongoose.Types.ObjectId,ref:"todo_crud"}] //moel name ref


},{versionKey:false})

const UserModel=mongoose.model('user',userSchema) //collection make hobey
module.exports=UserModel