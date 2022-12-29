
//setting up the user router functionality
const express = require('express')
const router = express.Router()

//importing the db functions to use as callbacks for routes
const {
    getAllSongs
} = require('../../controller/api/songController')

//get route to get all the users
//localhost:3000/api/songs/allSongs
router.get('/allSongs', getAllSongs)

module.exports = router