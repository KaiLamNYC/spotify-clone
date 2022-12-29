
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

module.exports = {
    getAllSongs
}