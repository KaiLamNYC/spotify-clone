//giving access to the user collection in our db
const Song = require('../../models/songModel')

//function to render all songs
async function renderAllSongs(req, res) {
    try {
        let result = await Song.find({})

        res.render('allSongs', { songs: result})
    } catch (err) {
        console.log(`renderAllSongs error: ${err}`);
    }
}

module.exports = {
    renderAllSongs
}