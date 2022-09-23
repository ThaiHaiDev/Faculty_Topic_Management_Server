const express = require('express')
const router = express.Router()

const specializedController = require('../app/controller/specializedController');
const checkToken = require('../middlewares/checkToken');

// Get All Types Topic
router.get('/', checkToken.verifyToken, specializedController.getAllSpecializeds)

// Get A Type Topic
router.get('/:id', checkToken.verifyToken, specializedController.getASpecialized)

// Add A Type Topic
router.post('/', checkToken.verifyTokenAdmin, specializedController.addSpecialized)

// Update A Type Topic
router.put('/:id', checkToken.verifyTokenAdminAll, specializedController.updateSpecialized)

// Delete A Type Topic
router.delete('/:id', checkToken.verifyTokenAdminAll, specializedController.deleteSpecialized)

module.exports = router