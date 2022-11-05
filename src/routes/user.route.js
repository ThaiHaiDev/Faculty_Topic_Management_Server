const express = require('express')
const router = express.Router()

const userController = require('../app/controller/userController');
const checkToken = require('../middlewares/checkToken');

// Get All Users 
router.get('/', checkToken.verifyTokenAdmin, userController.getAllUsers)

// Get A User By Role Dean
router.get('/dean', checkToken.verifyTokenAdmin, userController.getAUserByRoleDean)

// Get A User By Role Lecturers
router.get('/lecturers', checkToken.verifyToken, userController.getAUserByRoleLecturers)

// Get A User By Role Student
router.get('/student', checkToken.verifyToken, userController.getAUserByRoleStudent)

// Get A User 
router.get('/:id', checkToken.verifyTokenAdmin, userController.getAUser)

// Add User
router.post('/', checkToken.verifyTokenAdmin, userController.addUser)

// Delete User By Id Params
router.delete('/:id', checkToken.verifyTokenAdminDelete, userController.deleteUserWithParams)

// Delete User By Id Body
router.delete('/', checkToken.verifyTokenAdminDelete, userController.deleteUserWithBody)

// Update A User 
router.put('/:id', checkToken.verifyTokenAdminAll, userController.updateUser)

//
router.get('/topic/:idUser', checkToken.verifyToken, userController.getATopic)

//
router.get('/member/:idUser', checkToken.verifyToken, userController.getMemberInTeam)

module.exports = router