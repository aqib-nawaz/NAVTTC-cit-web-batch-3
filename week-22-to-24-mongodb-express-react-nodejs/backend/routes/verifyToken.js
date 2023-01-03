const jwt = require("jsonwebtoken")


function verifyToken(req, res, next) {
    
    const token = req.header("auth-token");
    if(!token) return res.status(400).send("token not found")

    try{
        const verify = jwt.verify(token, process.env.TOKEN_SECRET)

        next()
    } catch(err){
        res.status(400).send(err)
    }
}

module.exports = verifyToken