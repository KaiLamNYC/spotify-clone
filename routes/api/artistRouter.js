
const express = require('express');
const router = express.Router()

//importing the db functions to use as callbacks for routes

const {
    getAllArtists
} = require('../../controller/api/artistController')

//localhost:3000/api/artists/allArtists
router.get('/allArtists', getAllArtists)

module.exports = router