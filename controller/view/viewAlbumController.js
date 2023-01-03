//giving access to the user collection in our db
const Album = require('../../models/albumModel')
const Song = require('../../models/songModel')
const User = require('../../models/userModel')
// const Artist = require('../../models/artistModel')

//function to render all albums
async function renderAllAlbums(req, res) {
    try {
        let result = await Album.find({})

        let loggedInUser = await User.findById("63b284734181d706bd6a4007")

        res.render('allAlbums', { albums: result, cozy: loggedInUser})
    } catch (err) {
        console.log(`renderAllAlbums error: ${err}`);
    }
}

//function to render one album
async function renderOneAlbum(req, res) {
    try {
        let result = await Album.find({ _id: req.params.id })

        let albumSongs = await Song.find({ _id: result[0].Songs})

        let loggedInUser = await User.findById("63b284734181d706bd6a4007")


        console.log(result);
        res.render('oneAlbum', { album: result[0], songs: albumSongs, cozy: loggedInUser })
    } catch (err) {
        console.log(`renderOneAlbum error: ${err}`);

    }
}

module.exports = {
    renderAllAlbums,
    renderOneAlbum
}