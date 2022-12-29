const Playlist = require('../../models/playlistModel')

//function to return entire playlist collection from db
async function getAllPlaylists(req, res) {
    try {
        //just returning the entire collection from the database
        let result = await Playlist.find({})

        //responding in json
        res.json({
            message: 'success',
            payload: result
        })
        //if needed can return the result as well for front end or something
        //return result

    } catch (err) {
        console.log(`getAllPlaylists eroor ${err}`);
        res.json({
            message: 'failure',
            payload: err
        })
    }
}

module.exports = {
    getAllPlaylists
}