const jwt = require('jsonwebtoken');

const dotenv = require("dotenv").config();
module.exports = (req, res, next) => {
    
    
    console.log("req.body", req.body);
    try {
        if (!req.headers.authorization) {
            console.log("req.headers:,", req.headers.authorization);
            throw "Merci de vous connecter";
          }
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
        const userId = decodedToken.userId;
        console.log("middleware: userId ", decodedToken);

        if (req.body.userId && req.body.userId !== userId) {
            console.log("req.body.user, userId invalid", req.body.userId, userId);
            throw "Invalid user"
        } else {
            req.params.currentUser = decodedToken
            next();
        }
    } catch (error) {
        console.log("catch", error);
        res.status(403).json({
            message :"Unauthorized request"
        });
    }
};