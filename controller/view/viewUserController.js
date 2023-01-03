
//giving access to the user collection in our db
const User = require('../../models/userModel')
const Album = require('../../models/albumModel')
const Song = require('../../models/songModel')
const Artist = require('../../models/artistModel')

//function to render all users
async function renderAllUsers(req, res) {
    try {
        let result = await User.find({})

        let loggedInUser = await User.findById("63b284734181d706bd6a4007")
        

        res.render('allUsers', { users: result, cozy: loggedInUser})
    } catch (err) {
        console.log(`renderAllUsers error: ${err}`);
    }
}

//function to render a single user
async function renderOneUser(req, res) {
    try {
        let result = await User.find({ UserName: req.params.name })
        // console.log(result);

        // console.log(result[0].LikedAlbums);
        let userAlbums = await Album.find({ _id: result[0].LikedAlbums })
        // console.log(userAlbums);

        let userSongs = await Song.find({ _id: result[0].LikedSongs })

        let userArtists = await Artist.find({ _id: result[0].ArtistsFollowed })


        let loggedInUser = await User.findById("63b284734181d706bd6a4007")


        res.render('oneUser', { user: result[0], cozy: loggedInUser, albums: userAlbums, songs: userSongs, artists: userArtists })
    } catch (err) {
        console.log(`renderOneUser error: ${err}`);

    }
}

//function to render create user page
async function renderCreateUserPage(req, res){
    try {

        let loggedInUser = await User.findById("63b284734181d706bd6a4007")

        res.render('createUser', {cozy: loggedInUser})
    } catch (err) {
        console.log(`renderCreateUserPage error: ${err}`);

    }
}


module.exports = {
    renderAllUsers,
    renderOneUser,
    renderCreateUserPage
}
