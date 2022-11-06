const User = require('../models/user.model');
const Topic = require('../models/topic.model');
const bcrypt = require('bcrypt');

const userController = {
    // GET ALL USERS
    async getAllUsers (req, res) {
        try {
            const user = await User.find()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET A USER
    async getAUser (req, res) {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET USER BY ROLE DEAN
    async getAUserByRoleDean (req, res) {
        try {
            const user = await User.find({ role: 'dean' })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET USER BY ROLE lecturers
    async getAUserByRoleLecturers (req, res) {
        try {
            const user = await User.find({ role: 'lecturers' })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET USER BY ROLE student
    async getAUserByRoleStudent (req, res) {
        try {
            const user = await User.find({ role: 'student' })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET TOPIC WITH IDUSER
    async getATopic (req, res) {
        try {
            const topic = await Topic.find().populate('idSpecialized')
                                                            .populate('typeTopic')
                                                            .populate('leader')
                                                            .populate('gvhd')
                                                            .populate('gvpb')
                                                            .populate('team')   
            for (var i = 0; i < topic.length; i++) {
                const data = topic[i].team.filter(top => {return top._id.toString() === req.params.idUser})
                if (data.length !== 0) {
                    const topicOfUser = await Topic.findById(topic[i]._id).populate('idSpecialized')
                                                                            .populate('typeTopic')
                                                                            .populate('leader')
                                                                            .populate('gvhd')
                                                                            .populate('gvpb')
                                                                            .populate('team') 
                    return res.status(200).json(topicOfUser)
                    break
                }
            }                                             
            res.status(200).json('User chưa đăng ký đề tài')
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET USER IN TEAM WITH IDUSER 
    async getMemberInTeam (req, res) {
        try {
            const topic = await Topic.find().populate('team')     
            for (var i = 0; i < topic.length; i++) {
                const data = topic[i].team.filter(top => {return top._id.toString() === req.params.idUser})
                if (data.length !== 0) {
                    const topicOfUser = await Topic.findById(topic[i]._id)
                    return res.status(200).json(topic[i].team)
                    break
                }
            }                                             
            res.status(400).json('User không có nhóm')
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET ALL TEAM WITH ID GVHD
    async getAllTeamWithIdGvhd (req, res) {
        try {
            const ArrayTeam = [];
            const topicOfGv = await Topic.find({ gvhd: req.params.idGvhd }).populate('team').populate('leader')  
            for (var i = 0; i < topicOfGv.length; i++) {
                if (topicOfGv[i].leader) {
                    const team = {
                        teams: topicOfGv[i].team.filter(data => { return data._id.toString() !== topicOfGv[i].leader._id.toString()}),
                        leader: topicOfGv[i].leader
                    }
                    ArrayTeam.push(team)
                } else {
                    const team = {
                        teams: topicOfGv[i].team,
                        leader: topicOfGv[i].leader
                    }
                    ArrayTeam.push(team)
                }
                
            }
            res.status(200).json(ArrayTeam)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // ADD USER
    async addUser(req, res) {
        try{
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
        }catch(err) {
            res.status(500).json(err)
        }
    },

    // DELETE USER BY ID PARAMS
    async deleteUserWithParams (req, res) {
        try {
            if (User.findById(req.params.id)) {
                const user = await User.findByIdAndDelete(req.params.id)
                res.status(200).json("Delete success...")
            } else {
                res.status(200).json("User not found")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // DELETE USER BY ID BODY
    async deleteUserWithBody (req, res) {
        try {
            const user = await User.findByIdAndDelete(req.body.id)
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE USER
    async updateUser (req, res) {
        try {
            const data = req.body
            const { password, ...others } = data;
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(password, salt)
            await User.updateOne({ _id: req.params.id }, {...others, password: hashed}) 
            res.status(200).json('Updating success...')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = userController