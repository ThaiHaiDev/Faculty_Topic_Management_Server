const express = require('express')
const router = express.Router()

const userController = require('../app/controller/userController');
const checkToken = require('../middlewares/checkToken');

// Get All Users 
router.get('/', checkToken.verifyTokenAdmin, userController.getAllUsers)

// Get A User By Role Dean
router.get('/dean', checkToken.verifyTokenAdmin, userController.getAUserByRoleDean)

// Get A User By Role Dean
router.get('/lecturers', checkToken.verifyTokenAdmin, userController.getAUserByRoleLecturers)

// Get A User By Role Student
router.get('/student', checkToken.verifyTokenAdmin, userController.getAUserByRoleStudent)

// Get A User 
router.get('/:id', checkToken.verifyTokenAdmin, userController.getAUser)

// Add User
router.post('/', checkToken.verifyTokenAdmin, userController.addUser)

// Delete User By Id Params
router.delete('/:id', checkToken.verifyTokenAdminDelete, userController.deleteUserWithParams)

// Delete User By Id Body
router.delete('/', checkToken.verifyTokenAdminDelete, userController.deleteUserWithBody)

// Update A User 
router.put('/:id', checkToken.verifyTokenAdminUpdate, userController.updateUser)

module.exports = router