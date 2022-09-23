const express = require('express')
const router = express.Router()

const topicController = require('../app/controller/topicController');
const checkToken = require('../middlewares/checkToken');

// Get All Types Topic
router.get('/', checkToken.verifyTokenAdmin, topicController.getAllTopics)

// Get A Type Topic
router.get('/:id', checkToken.verifyToken, topicController.getATopic)

// Add A Type Topic
router.post('/', checkToken.verifyToken, topicController.addTopic)

// Update A Type Topic
router.put('/:id', checkToken.verifyTokenAdminAll, topicController.updateTopic)

// Delete A Type Topic
router.delete('/:id', checkToken.verifyTokenAdminAll, topicController.deleteTopic)

// 1st Approval
router.patch('/:id/1st', checkToken.verifyTokenAdmin, topicController.Approval1st)

// 2nd Approval
router.patch('/:id/2nd', checkToken.verifyTokenAdmin, topicController.Approval2nd)

module.exports = router