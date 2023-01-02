
//setting up the user router functionality
const express = require('express')
const router = express.Router()

//importing the db functions to use as callbacks for routes
const {
    getAllUsers,
    getOneUser
} = require('../../controller/api/userController')

//get route to get all the users
//localhost:3000/api/users/allUsers
router.get('/allUsers', getAllUsers)

//getting a specific user by name
//localhost:3000/api/users/name
router.get('/oneUser/:name', getOneUser)

module.exports = router
