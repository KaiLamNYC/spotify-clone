//setting up the router functionality
const express = require('express')
const router = express.Router()

//improting the db functions
const {
    getAllAlbums
} = require('../../controller/api/albumController')

//setting up the router to get all the albums
//localhost:3000/api/albums/allAlbums
router.get('/allAlbums', getAllAlbums)

//exporting the router
module.exports = router