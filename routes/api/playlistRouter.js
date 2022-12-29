const express = require('express');
const router = express.Router()

const {
    getAllPlaylists
} = require('../../controller/api/playlistController')

//localhost:3000/api/playlists/allPlaylists
router.get('/allPlaylists', getAllPlaylists)

module.exports = router

