const TypeTopic = require('../models/typetopic.model');
const Topic = require('../models/topic.model');
const Noti = require('../models/noti.model');
const User = require('../models/user.model');

const statisticController = {
    // GET ALL TYPETOPIC
    async getStatistic (req, res) {
        try {
            const allTopic = await Topic.find()
            const topicApproval1st = await Topic.find({status: 'duyet1'})
            const topicApproved = await Topic.find({status: 'duyet2'})
            const userGvhd = await User.find({ role: 'lecturers' })
            const userSv = await User.find({ role: 'student' })
            const userSvIsTeam = await User.find({ isTeam: true })
            const dataStatistic = {
                numberOfTopic: allTopic.length,
                numberOfTopicApproved: topicApproved.length,
                numberOfTopicApproving: allTopic.length - topicApproved.length,
                numberOfTopicApproval1st: topicApproval1st.length,
                numberOfLecturers: userGvhd.length,
                numberOfStudents: userSv.length,
                numberOfStudentIsTeam: userSvIsTeam.length,
                numberOfStudentNotIsTeam: userSv.length - userSvIsTeam.length,
            }
            res.status(200).json(dataStatistic)
        } catch (error) {
            res.status(500).json(error)
        }
    }, 
}

module.exports = statisticController