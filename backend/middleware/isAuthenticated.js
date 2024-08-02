const jwt = require("jsonwebtoken")

const isAuthenticated = (req,res,next) => {
    try{
        //get token cookie out of req
        const {token,isAuthenticated} = req.cookies
        //chech the validation of token
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
        //set userId from token to req.user property
        req.userId= decodedToken.userId
        next()
    } catch(err) {
            //delete unvalid token and isAuthenticated cookies
            res.clearCookie("token")
            res.clearCookie("isAuthenticated")
            //res with 404
            res.status(400).json({"errorMsg": err.message})
    }
}

module.exports = isAuthenticated