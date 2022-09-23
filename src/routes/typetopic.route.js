const express = require('express')
const router = express.Router()

const typeTopicController = require('../app/controller/typetopicController');
const checkToken = require('../middlewares/checkToken');

// Get All Types Topic
router.get('/', checkToken.verifyToken, typeTopicController.getAllTypeTopics)

// Get A Type Topic
router.get('/:id', checkToken.verifyToken, typeTopicController.getATypeTopic)

// Add A Type Topic
router.post('/', checkToken.verifyTokenAdmin, typeTopicController.addTypeTopic)

// Update A Type Topic
router.put('/:id', checkToken.verifyTokenAdminAll, typeTopicController.updateTypeTopic)

// Delete A Type Topic
router.delete('/:id', checkToken.verifyTokenAdminAll, typeTopicController.deleteTypeTopic)

module.exports = router