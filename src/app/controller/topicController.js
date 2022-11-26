const Topic = require('../models/topic.model');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const checkMaxGv = require('../../services/checkMaxGv');

const ErrorCode = require('../../exceptions/errorCode');
const { findById } = require('../models/topic.model');

const topicController = {
    // GET ALL TOPIC
    async getAllTopics (req, res) {
        try {
            const topic = await Topic.find().populate('idSpecialized')
                                            .populate('typeTopic')
                                            .populate('leader')
                                            .populate('gvhd')
                                            .populate('gvpb')
                                            .populate('team')
            res.status(200).json(topic)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET A TOPIC
    async getATopic (req, res) {
        try {
            const topic = await Topic.findById(req.params.id).populate('idSpecialized')
                                                            .populate('typeTopic')
                                                            .populate('leader')
                                                            .populate('gvhd')
                                                            .populate('gvpb')
                                                            .populate('team')                        
            res.status(200).json(topic)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Get topic not approved
    async getATopicNotApproval (req, res) {
        try {
            const topicOfGv = await Topic.find({ gvhd: req.params.idGvhd }).populate('idSpecialized')
                                                                            .populate('typeTopic')
                                                                            .populate('leader')
                                                                            .populate('gvhd')
                                                                            .populate('gvpb')
                                                                            .populate('team') 

            const topicResult = topicOfGv.filter(data => { return data.status === 'duyet0' })   
            if (topicResult.length > 0) {
                res.status(200).json(topicResult)
            } else {
                res.status(400).json(ErrorCode.USERGV_NOT_TOPIC_APPROVAL)
            }               
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Get all topic of gvhd
    async getAllTopicOfGvHd (req, res) {
        try {
            const topicOfGv = await Topic.find({ gvhd: req.params.idGvhd }).populate('idSpecialized')
                                                                            .populate('typeTopic')
                                                                            .populate('leader')
                                                                            .populate('gvhd')
                                                                            .populate('gvpb')
                                                                            .populate('team') 

           res.status(200).json(topicOfGv)             
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Get topic approval 1st
    async getATopicApproval1st (req, res) {
        try {
            const topic = await Topic.find({status: 'duyet1'}).populate('idSpecialized')
                                                            .populate('typeTopic')
                                                            .populate('leader')
                                                            .populate('gvhd')
                                                            .populate('gvpb')
                                                            .populate('team')                        
            res.status(200).json(topic)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Get topic approved
    async getATopicApproved (req, res) {
        try {
            const topic = await Topic.find({status: 'duyet2'}).populate('idSpecialized')
                                                            .populate('typeTopic')
                                                            .populate('leader')
                                                            .populate('gvhd')
                                                            .populate('gvpb')
                                                            .populate('team')                        
            res.status(200).json(topic)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // ADD TOPIC
    async addTopic(req, res) {
        try{
            console.log(req.body);
          
            
            if (parseInt(req.body.team.length) > parseInt(req.body.slsv)) {
                res.status(400).json(ErrorCode.LIMITED_USER_REGISTER_TOPIC)
            } else {
                if (req.body.gvhd === '') {
                    return res.status(400).json(ErrorCode.GVHD_NOT_BLANK)
                }
                if (req.body.idSpecialized === '') {
                    return res.status(400).json(ErrorCode.SPECIALIZED_NOT_BLANK)
                }
                if (req.body.typeTopic === '') {
                    return res.status(400).json(ErrorCode.TYPE_TOPIC_NOT_BLANK)
                }
                const topicOfGvhd = await Topic.find({gvhd: req.body.gvhd})
                if (parseInt(topicOfGvhd.length) > 8) {
                    res.status(400).json(ErrorCode.USERGV_FULL_SLOT_REGISTER) 
                } else {
                    for (var i = 0; i < parseInt(req.body.team.length); i++) {
                        const userInTeam = await User.findById(req.body.team[i])
                        if (userInTeam.isTeam === true) {
                            return res.status(403).json(ErrorCode.USER_IS_TEAM)
                        } else {
                            await User.updateOne({ _id: req.body.team[i] }, {isTeam: true}) 
                        }
                    }
                    const newTypeTopic = new Topic(formData)
                    const saveCate = await newTypeTopic.save()
                    res.status(200).json(saveCate) 
                }
            }
        } catch(err) {
            res.status(500).json(err)
        }
    },

    // DELETE TOPIC
    async deleteTopic (req, res) {
        try {
            const userInTopic = await Topic.find({_id: req.params.id})
            const listIdUser = userInTopic[0].team
            for (var i = 0; i < listIdUser.length; i++) {
                await User.updateOne({ _id: listIdUser[i] }, {isTeam: false}) 
            }
            await Topic.findByIdAndDelete(req.params.id)
            res.status(200).json('Xóa thành công...')
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE TOPIC
    async updateTopic(req, res) {
        try {
            const checkTopic = await Topic.find({_id: req.params.id})
            const formData = req.body
            const token = req.headers.token;

            if(token) {
                const accessToken = token.split(" ")[1]
                jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, async (err, user) => {
                    if(err) {
                        return res.status(403).json(ErrorCode.TOKEN_IS_NOT_VALID)
                    }
                    req.user = user;
                    if (req.user.role === 'dean') {
                        await Topic.updateOne({ _id: req.params.id }, formData) 
                        res.status(200).json("Cập nhật thành công")
                    } else if (req.user.role === 'lecturers') {
                        if (checkTopic[0].gvhd.toString() !== req.user.id) {
                            return res.status(400).json('Bạn không phải là gvhd của đề tài này')
                        }
                        if (checkTopic[0].status === 'duyet2') {
                            return res.status(400).json('Đề tài này đã được trưởng khoa thông qua')
                        } 
                        await Topic.updateOne({ _id: req.params.id }, formData) 
                        res.status(200).json("Cập nhật thành công")
                    } else {
                        if (checkTopic[0].leader.toString() !== req.user.id) {
                            return res.status(400).json('Bạn không phải leader')
                        }
                        if (checkTopic[0].status === 'duyet1') {
                            return res.status(400).json('Đề tài này đã được gvhd thông qua')
                        } 
                        await Topic.updateOne({ _id: req.params.id }, formData) 
                        res.status(200).json("Cập nhật thành công")
                    }
                })
            }
            else {
                return res.status(401).json(ErrorCode.NOT_AUTHENTICATED)
            } 
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Approval first
    async Approval1st(req, res) {
        try {
            const topic = await Topic.findById(req.params.id)

            if (topic.status === 'duyet0') {
                appproval = 'duyet1'
                await Topic.updateOne({ _id: req.params.id }, {status: appproval}) 
                res.status(200).json("Phê duyệt lần 1 thành công")
            } else {
                res.status(400).json(ErrorCode.TOPIC_APPROVED)
            }
      
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Approval first
    async Approval2nd(req, res) {
        try {
            const topic = await Topic.findById(req.params.id)

            if (topic.status === 'duyet1') {
                appproval = 'duyet2'
                await Topic.updateOne({ _id: req.params.id }, {status: appproval}) 
                res.status(200).json("Đề tài đã được duyệt lần 2 thành công")
            } else if (topic.status === 'duyet1') {
                res.status(400).json(ErrorCode.TOPIC_NOT_APPROVAL)
            } else {
                res.status(400).json(ErrorCode.TOPIC_APPROVED)
            }
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

module.exports = topicController