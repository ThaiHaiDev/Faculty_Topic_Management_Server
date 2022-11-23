const express = require('express')
const router = express.Router()

const topicController = require('../app/controller/topicController');
const checkToken = require('../middlewares/checkToken');

// Get All Topics
router.get('/', checkToken.verifyTokenAdmin, topicController.getAllTopics)

// Lấy các đề tài đã được giảng viên thông qua nhưng chưa được trưởng khoa xem xét
router.get('/approval1st', checkToken.verifyToken, topicController.getATopicApproval1st)

// Lấy các topic chưa phê duyệt của giảng viên
router.get('/notapproval/:idGvhd', checkToken.verifyToken, topicController.getATopicNotApproval)

// Lấy tất cả topic của giảng viên đó
router.get('/alltopicofgvhd/:idGvhd', checkToken.verifyToken, topicController.getAllTopicOfGvHd)

// Lấy các đề tài đã thông qua do trưởng khoa phê duyệt
router.get('/approved', checkToken.verifyToken, topicController.getATopicApproved)

// Get A Topic
router.get('/:id', checkToken.verifyToken, topicController.getATopic)

// Add A Topic
router.post('/', checkToken.verifyToken, topicController.addTopic)

// Update A Type Topic
router.put('/:id', checkToken.verifyToken, topicController.updateTopic)

// Delete A Type Topic
router.delete('/:id', checkToken.verifyTokenAdminAll, topicController.deleteTopic)

// 1st Approval
router.patch('/:id/1st', checkToken.verifyTokenAdmin, topicController.Approval1st)

// 2nd Approval
router.patch('/:id/2nd', checkToken.verifyTokenAdmin, topicController.Approval2nd)


module.exports = router