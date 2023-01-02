
//importing the artist model
const Artist = require('../../models/artistModel')
const Album = require('../../models/albumModel')

//function to return entire artist collection from db
async function getAllArtists(req, res) {
    try {
        //just returning the entire collection from the database
        let result = await Artist.find({})

        //responding in json
        res.json({
            message: 'success',
            payload: result
        })
        //if needed can return the result as well for front end or something
        //return result

    } catch (err) {
        console.log(`getAllArtists eroor ${err}`);
        res.json({
            message: 'failure',
            payload: err
        })
    }
}

//function to add an album to the artist collection
//only really used for backend stuff no clientside
//only need clientside for addling likes and follows playlists etc
async function addAlbumToArtist(req, res) {

    try{

        let targetedArtist = req.body.artistId
        let targetedAlbum = req.body.albumId

        let artistDoc = await Artist.findById(targetedArtist)
        let albumDoc = await Album.findById(targetedAlbum)

        artistDoc.Albums.push(targetedAlbum)
        albumDoc.Artist.push(targetedArtist)

        await artistDoc.save()
        await albumDoc.save()
        res.json({
            message:'success',
            payload: [artistDoc, albumDoc]
        })
    } catch (err) {
        console.log(err);
        res.json({
            message: 'failed',
            payload: err
        })

    }

}




module.exports = {
    getAllArtists,
    addAlbumToArtist
}