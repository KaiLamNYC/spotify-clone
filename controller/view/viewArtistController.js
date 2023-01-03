//giving access to the user collection in our db
const Artist = require('../../models/artistModel')
const Album = require('../../models/albumModel')
const User = require('../../models/userModel')


//function to render all users
async function renderAllArtists(req, res) {
    try {
        let result = await Artist.find({})

        let loggedInUser = await User.findById("63b284734181d706bd6a4007")


        res.render('allArtists', { artists: result, cozy: loggedInUser})
    } catch (err) {
        console.log(`renderAllArtists error: ${err}`);
    }
}

async function renderOneArtist(req, res) {
    try {
        let result = await Artist.find({ _id: req.params.id })
        console.log(result[0].Albums);
        //grabbing all of the artists albums for the view
        let artistAlbums = await Album.find({ _id: result[0].Albums })
        // console.log(artistAlbums);
        // console.log(result);

        let loggedInUser = await User.findById("63b284734181d706bd6a4007")


        res.render('oneArtist', { artist: result[0], albums: artistAlbums, cozy: loggedInUser})
    } catch (err) {
        console.log(`renderOneArtist error: ${err}`);
    }
}

//function to render create artist page
async function renderCreateArtistPage(req, res){
    try {

        let loggedInUser = await User.findById("63b284734181d706bd6a4007")

        res.render('createArtist', {cozy: loggedInUser})
    } catch (err) {
        console.log(`renderCreateArtistPage error: ${err}`);

    }
}

module.exports = {
    renderAllArtists,
    renderOneArtist,
    renderCreateArtistPage
}