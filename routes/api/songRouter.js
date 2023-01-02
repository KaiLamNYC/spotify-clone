
//setting up the user router functionality
const express = require('express')
const router = express.Router()

//importing the db functions to use as callbacks for routes
const {
    getAllSongs,
    addNewSong
} = require('../../controller/api/songController')

//get route to get all the users
//localhost:3000/api/songs/allSongs
router.get('/allSongs', getAllSongs)

//route to create a new song
//localhost:3000/api/songs/addSong
router.post('/addSong', addNewSong)

module.exports = router