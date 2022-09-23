const express = require('express')
const router = express.Router()

const specializedController = require('../app/controller/specializedController');
const checkToken = require('../middlewares/checkToken');

// Get All Types Specialized
router.get('/', checkToken.verifyToken, specializedController.getAllSpecializeds)

// Get A Specialized
router.get('/:id', checkToken.verifyToken, specializedController.getASpecialized)

// Add A Specialized
router.post('/', checkToken.verifyTokenAdmin, specializedController.addSpecialized)

// Update A Specialized
router.put('/:id', checkToken.verifyTokenAdminAll, specializedController.updateSpecialized)

// Delete A Specialized
router.delete('/:id', checkToken.verifyTokenAdminAll, specializedController.deleteSpecialized)

module.exports = router