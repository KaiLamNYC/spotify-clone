//giving access to the user collection in our db
const Song = require('../../models/songModel')
const User = require('../../models/userModel')


//function to render all songs
async function renderAllSongs(req, res) {
    try {
        let result = await Song.find({})

        let loggedInUser = await User.findById("63b284734181d706bd6a4007")


        res.render('allSongs', { songs: result, cozy: loggedInUser})
    } catch (err) {
        console.log(`renderAllSongs error: ${err}`);
    }
}

module.exports = {
    renderAllSongs
}