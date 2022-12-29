
//importing the artist model
const Artist = require('../../models/artistModel')

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

module.exports = {
    getAllArtists
}