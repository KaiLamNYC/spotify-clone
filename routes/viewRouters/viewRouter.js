

//importing modules for router

const express = require('express')
const router = express.Router();

//importing the functions from the controller later
const {
  renderAllUsers
} = require('../../controller/view/viewUserController')

const {
  renderAllArtists
} = require('../../controller/view/viewArtistController')

const {
  renderAllAlbums
} = require('../../controller/view/viewAlbumController')

const {
  renderAllSongs
} = require('../../controller/view/viewSongController')
//setting up the actual router

//rendering the home page
router.get('/home', (req, res) => {
  res.render('index');
});

//rendering all of the users
router.get('/allUsers', renderAllUsers);

//rendering all of the artists
router.get('/allArtists', renderAllArtists);

//rendering all of the albums
router.get('/allAlbums', renderAllAlbums);

//rendering all of the songs
router.get('/allSongs', renderAllSongs);


//exporting the router
module.exports = router;

