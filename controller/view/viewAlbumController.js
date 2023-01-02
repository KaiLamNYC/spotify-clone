//giving access to the user collection in our db
const Album = require('../../models/albumModel')
const Song = require('../../models/songModel')
// const Artist = require('../../models/artistModel')

//function to render all albums
async function renderAllAlbums(req, res) {
    try {
        let result = await Album.find({})
        res.render('allAlbums', { albums: result})
    } catch (err) {
        console.log(`renderAllAlbums error: ${err}`);
    }
}

//function to render one album
async function renderOneAlbum(req, res) {
    try {
        let result = await Album.find({ _id: req.params.id })

        let albumSongs = await Song.find({ _id: result[0].Songs})

        console.log(result);
        res.render('oneAlbum', { album: result[0], songs: albumSongs })
    } catch (err) {
        console.log(`renderOneAlbum error: ${err}`);

    }
}

module.exports = {
    renderAllAlbums,
    renderOneAlbum
}