const UserModel = require('./../models/UserModel')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')

exports.Login = async (req, res) => {
    try {
        let user=await UserModel.aggregate([{$match: {username: req.body.username}}])
        //let user=await UserModel.find({username: req.body.username})
        if(user && user.length>0){
            const isValidPassword=await bcrypt.compare(req.body.password,user[0].password)
            if(isValidPassword){
            //generate token

                const token=jwt.sign({   //Secret Data Dewa Jabey na ->eta ke deka jai,but change kora jai na
                    username:user[0].username,
                    userId:user[0]._id
                },process.env.JWT_SECRET,{expiresIn:'1h'})

                res.status(200).json({ "access_token":token,"message":"Login Successful"})
            }else{
                res.status(401).json({status: "fail", error:"Authentication failed!"})
            }
        }else{
            res.status(401).json({status: "fail", error:"Authentication failed!"})
        }


    } catch (e) {
        res.status(401).json({status: "fail",error:"Authentication failed!" ,data: e.toString()})
    }
}


//SIGN UP
exports.SignUp = async (req, res) => {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password, 10)
        let reqBody = {
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword
        };
        let data = await UserModel.create(reqBody)
        res.status(200).json({status: "success", message: "Signup was successful!", data: data})
    } catch (e) {
        res.status(500).json({status: "fail", message: "Signup failed!", data: e.toString()})
    }
}


exports.GetUsers = async (req, res) => {

    try{
        let data=await UserModel.find({}).populate('todos')
            res.status(200).json({status: "success", data: data})
    }catch (e) {
        res.status(400).json({status: "fail", data: e.toString()})
    }
}

// jekaney time lagey sekaney callback or async await (asynchronous)