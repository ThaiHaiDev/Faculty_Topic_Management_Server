const Topic = require('../models/topic.model');
const User = require('../models/user.model');

const checkMaxGv = require('../../services/checkMaxGv')

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
            res.status(200).json(topicResult)
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
            const formData = req.body

            if (parseInt(req.body.team.length) > parseInt(req.body.slsv)) {
                res.status(401).json('Số lượng sinh viên quá giới hạn....')
            } else {
                const topicOfGvhd = await Topic.find({gvhd: req.body.gvhd})
                if (parseInt(topicOfGvhd.length) > 8) {
                    res.status(401).json('Giáo viên đã đủ nhóm đăng kí') 
                } else {
                    for (var i = 0; i < parseInt(req.body.team.length); i++) {
                        const userInTeam = await User.findById(req.body.team[i])
                        if (userInTeam.isTeam === true) {
                            return res.status(403).json('User đã có nhóm...')
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
            await Topic.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE TOPIC
    async updateTopic(req, res) {
        try {
            const formData = req.body
            await Topic.updateOne({ _id: req.params.id }, formData) 
            res.status(200).json("Update success...")
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
                res.status(200).json("Approval 1st success...")
            } else {
                res.status(400).json('Đề tài đã được duyệt')
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
                res.status(200).json("Approval 2nd success...")
            } else if (topic.status === 'duyet1') {
                res.status(400).json('Đề tài cần được thông qua bởi giảng viên')
            } else {
                res.status(400).json('Đề tài đã được duyệt')
            }
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

module.exports = topicController