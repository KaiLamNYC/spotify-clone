
const express = require('express');
const router = express.Router()

//importing the db functions to use as callbacks for routes

const {
    getAllArtists,
    addAlbumToArtist
} = require('../../controller/api/artistController')

//localhost:3000/api/artists/allArtists
router.get('/allArtists', getAllArtists)

//function to add album to artist profile for backend use
router.post('/addAlbumToArtist', addAlbumToArtist)

module.exports = router