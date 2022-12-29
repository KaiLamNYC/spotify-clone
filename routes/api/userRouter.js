
//setting up the user router functionality
const express = require('express')
const router = express.Router()

//importing the db functions to use as callbacks for routes
const {
    getAllUsers
} = require('../../controller/api/userController')

//get route to get all the users
//localhost:3000/api/users/allUsers
router.get('/allUsers', getAllUsers)

module.exports = router
