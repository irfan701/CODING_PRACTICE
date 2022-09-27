const jwt = require('jsonwebtoken')
const CheckLoginMiddleware = (req, res, next) => {

    const {authorization} = req.headers;

    console.log(req.headers)
    try {

        const token = authorization.split(" ")[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {username, userId} = decoded
        req.username = username;
        req.userId = userId;
        next()
    } catch (e) {
        console.log(e.toString())
        next("Authentication failure!")
    }

}
module.exports = CheckLoginMiddleware;