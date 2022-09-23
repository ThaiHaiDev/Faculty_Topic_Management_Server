const express = require('express')
const router = express.Router()

const noticationController = require('../app/controller/notiController');
const checkToken = require('../middlewares/checkToken');

// Get All Notis
router.get('/', checkToken.verifyToken, noticationController.getAllNotis)

// Get A Noti
router.get('/:id', checkToken.verifyToken, noticationController.getANoti)

// Add A Noti
router.post('/', checkToken.verifyTokenAdmin, noticationController.addNoti)

// Update A Noti
router.put('/:id', checkToken.verifyTokenAdminAll, noticationController.updateNoti)

// Delete A Noti
router.delete('/:id', checkToken.verifyTokenAdminAll, noticationController.deleteNoti)

module.exports = router