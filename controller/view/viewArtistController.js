//giving access to the user collection in our db
const Artist = require('../../models/artistModel')

//function to render all users
async function renderAllArtists(req, res) {
    try {
        let result = await Artist.find({})

        res.render('allArtists', { artists: result})
    } catch (err) {
        console.log(`renderAllArtists error: ${err}`);
    }
}

module.exports = {
    renderAllArtists
}