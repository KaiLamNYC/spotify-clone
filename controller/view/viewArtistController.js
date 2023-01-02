//giving access to the user collection in our db
const Artist = require('../../models/artistModel')
const Album = require('../../models/albumModel')

//function to render all users
async function renderAllArtists(req, res) {
    try {
        let result = await Artist.find({})

        res.render('allArtists', { artists: result})
    } catch (err) {
        console.log(`renderAllArtists error: ${err}`);
    }
}

async function renderOneArtist(req, res) {
    try {
        let result = await Artist.find({ _id: req.params.id })

        //grabbing all of the artists albums for the view
        let artistAlbums = await Album.find({ _id: result[0].Albums[0] })
        console.log(artistAlbums);
        // console.log(result);
        res.render('oneArtist', { artist: result[0], albums: artistAlbums})
    } catch (err) {
        console.log(`renderOneArtist error: ${err}`);
    }
}

module.exports = {
    renderAllArtists,
    renderOneArtist
}