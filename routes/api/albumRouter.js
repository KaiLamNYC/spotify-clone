//setting up the router functionality
const express = require('express')
const router = express.Router()

//improting the db functions
const {
    getAllAlbums,
    getOneAlbum
} = require('../../controller/api/albumController')

//setting up the router to get all the albums
//localhost:3000/api/albums/allAlbums
router.get('/allAlbums', getAllAlbums)

//gettting one album
//localhost:3000/api/albums/oneAlbum/:id
router.get('/oneAlbum/:id', getOneAlbum)

//exporting the router
module.exports = router