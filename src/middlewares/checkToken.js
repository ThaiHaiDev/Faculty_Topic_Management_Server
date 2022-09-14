const jwt = require('jsonwebtoken');
const User = require('../app/models/user.model');

const middlewareController = {
    // verifyToken
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if(token) {
            // Bearer 123abc
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if(err) {
                    return res.status(403).json('Token is not valid')
                }
                req.user = user;
                next();  
            })
        }
        else {
            return res.status(401).json("You're not authenticated")
        }
    },

    // verifyTokenAdmin when delete
    verifyTokenAdminDelete: (req, res, next) => {
        middlewareController.verifyToken(req, res, async() => {
            const userParams = await User.findById(req.params.id)
            const userBody = await User.findById(req.body.id)
            if (userParams || userBody) {
                 // Nếu id của user login = id user mình muốn xóa hoặc là admin
                if(req.user.id == req.params.id || req.user.role === 'dean') { 
                    next();
                }
                else {
                    return res.status(403).json("You're not allowed to delete orther...")
                }
            }
            else {
                return res.status(403).json("User not found")
            }
           
        })
    },

    verifyTokenAdmin: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            // Nếu id của user login = id user mình muốn AU hoặc là admin
            if(req.user.id == req.params.id || req.user.role === 'dean' || req.user.role === 'lecturers') { 
                next();
            }
            else {
                return res.status(403).json("You're not allowed to orther...")
            }
        })
    },

    // verifyTokenAdmin when update
    verifyTokenAdminUpdate: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            // Nếu id của user login = id user mình muốn AU hoặc là admin
            if(req.user.id == req.params.id || req.user.role === 'dean') { 
                next();
            }
            else {
                return res.status(403).json("You're not allowed to orther...")
            }
        })
    }
}

module.exports = middlewareController;
