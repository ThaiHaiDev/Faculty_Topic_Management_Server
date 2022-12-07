const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ErrorCode = require('../../exceptions/errorCode')

const authController = {
    // REGISTER
    async registerUser (req, res) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
            
            // Create new user
            const newUser = await new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashed,
                mssv: req.body.mssv,
                phone: req.body.phone,
                role: req.body.role
            });

            // // Save to DB
            const user = await newUser.save();
            res.status(200).json(newUser)

        } catch (error) {
            res.status(500).json(ErrorCode.USERNAME_EXIST)
        }
    },

    // GENERATE ACCESS TOKEN
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "365d" }
        )
    },

    // GENERATE REFRESH TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "7d" }
        )
    },

    // LOGIN
    async loginUser (req, res) {
        try {
            const user = await User.findOne({ email: req.body.email })
            if(!user) {
                return res.status(404).json(ErrorCode.EMAIL_INVALID);
            }
            const validPassword = await bcrypt.compare(
                req.body.password, user.password
            )
            if(!validPassword) {
                return res.status(404).json(ErrorCode.INVALID_CHANGE_PASSWORD)
            }
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);

                // save refreshToken trong Cookies
                res.setHeader('Access-Control-Allow-Origin', 'https://resplendent-sunflower-2693dc.netlify.app');
                // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
                res.setHeader('Access-Control-Allow-Credentials',true);
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: false,
                    secure: false,  // Khi làm để false, nào deploy thì để true cho bảo vệ
                    path: '/',
                    sameSite: 'strict'
                })

                const { password, ...others } = user._doc;
                res.status(200).json({user: {...others}, accessToken, refreshToken})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // REFRESH TOKEN
    requestRefreshToken: async(req, res) => {
        // Lấy refreshToken từ user
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) return res.status(401).json(ErrorCode.NOT_AUTHENTICATED)

        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if(err) {
                console.log(err);
            }

            // Create new accessToken, refreshToken
            const newAccessToken = jwt.sign(
                {
                    id: user.id,
                    role: user.role
                },
                process.env.JWT_ACCESS_KEY,
                { expiresIn: "600s" }
            )

            res.status(200).json({ accessToken: newAccessToken })
        })
    },

    // LOG OUT
    userLogout: async(req, res) => {
        res.clearCookie('refreshToken');
        res.status(200).json(ErrorCode.LOGOUT);
    }
    
}

module.exports = authController