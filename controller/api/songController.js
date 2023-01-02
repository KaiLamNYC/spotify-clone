
const Song = require('../../models/songModel')

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

module.exports = {
    getAllSongs,
    addNewSong
}