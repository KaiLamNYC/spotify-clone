
const Song = require('../../models/songModel')
const Artist = require('../../models/artistModel')
const Album = require('../../models/albumModel')

//function to return entire artist collection from db
async function getAllSongs(req, res) {
    try {
        //just returning the entire collection from the database
        let result = await Song.find({})

        //responding in json
        res.json({
            message: 'success',
            payload: result
        })
        //if needed can return the result as well for front end or something
        //return result

    } catch (err) {
        console.log(`getAllSongs eroor ${err}`);
        res.json({
            message: 'failure',
            payload: err
        })
    }
}

//function to add a new song, need to test if album attribute is added after modicification
async function addNewSong(req, res) {
    try {
        //taking the entire request and settting to var
        let newSong = req.body
        //creating new song document with the body
        await Song.create(newSong)
        res.json({
            message:'success',
            payload: newSong
        })
    } catch (err) {
        console.log(`addNewSong error: ${err}`);

        // client-side
        res.json({
            message: "failure",
            payload: `addNewSong error: ${err}`
        });
    }
}

//assigning an artist to song
//also assigning the song to an album
async function addArtistAlbumToSong(req, res) {

    try{
        //grabbing all the info from the json body
        let targetedArtist = req.body.artistId
        let targetedSong = req.body.songId
        let targetedAlbum = req.body.albumId

        //grabbing album and song doc to add to them later
        let albumDoc = await Album.findById(targetedAlbum)
        let songDoc = await Song.findById(targetedSong)

       //adding artist to the song
        songDoc.Artists.push(targetedArtist)
        //adding the proper album to song
        songDoc.Album = targetedAlbum

        //adding song to album
        albumDoc.Songs.push(targetedSong)


        await songDoc.save()
        await albumDoc.save()
        res.json({
            message:'success',
            payload: [songDoc, albumDoc]
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
    getAllSongs,
    addNewSong,
    addArtistAlbumToSong,

}