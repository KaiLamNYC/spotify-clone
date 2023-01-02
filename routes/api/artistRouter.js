
const express = require('express');
const router = express.Router()

//importing the db functions to use as callbacks for routes

const {
    getAllArtists,
    addAlbumToArtist,
    getOneArtist
} = require('../../controller/api/artistController')

//localhost:3000/api/artists/allArtists
router.get('/allArtists', getAllArtists)

//function to add album to artist profile for backend use
//localhost:3000/api/artists/addAlbumToArtist
router.post('/addAlbumToArtist', addAlbumToArtist)

//function to get one artist
//localhost:3000/api/artists/oneArtist/:id
router.get('/oneArtist/:id', getOneArtist)

module.exports = router