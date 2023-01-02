//giving access to the user collection in our db
const Album = require('../../models/albumModel')
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

module.exports = {
    renderAllAlbums
}