
//importing the album model
const Album = require('../../models/albumModel')

//function to return the entire album collection
async function getAllAlbums(req, res) {
    try {
        //just returning the entire collection from the database
        let result = await Album.find({})

        //responding in json
        res.json({
            message: 'success',
            payload: result
        })
        //if needed can return the result as well for front end or something
        //return result

    } catch (err) {
        console.log(`getAllAlbums eroor ${err}`);
        res.json({
            message: 'failure',
            payload: err
        })
    }
}

async function getOneAlbum(req, res) {
    try{
        let result = await Album.find({ _id: req.params.id })
        res.json({
            message:'success finding album',
            payload: result
        }) 
    } catch (err) {
        console.log(`getOneAlbum eroor ${err}`);
        res.json({
            message: 'failure',
            payload: err
        })
    }
}

module.exports = {
    getAllAlbums,
    getOneAlbum
}