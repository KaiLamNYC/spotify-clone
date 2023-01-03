
//importing the model
const User = require('../../models/userModel')
const Album = require('../../models/albumModel')
const Song = require('../../models/songModel')
const Artist = require('../../models/artistModel')

//function to return all of the users which is the main piece of data
async function getAllUsers(req, res){
    try {

        let result = await User.find({})

        res.json({
            message: 'success',
            payload: result
        })

    } catch (err) {
        console.log(`getAllUsers error: ${err}`);
        res.json({
            message: 'error',
            payload: err
        })
    }
}

//function to get one user
async function getOneUser(req, res){
    try{
        //.name refers to the param set in router
        let result = await User.find({ UserName: req.params.name })
        res.json({
            message: 'success finding user',
            payload: result
        })

    } catch (err) {
        console.log(`getOneUser error: ${err}`);
        res.json({
            message: 'error',
            payload: err
        })

    }
}

//function to add an album to the users likedAlbum array
async function addUserFavoriteAlbum(req, res){
    try {

        //getting the keys from the request body
        let targetedUser = req.body.userId
        let targetedAlbum = req.body.albumId

        //finding the album and user by id to add later
        let userDoc = await User.findById(targetedUser)
        let albumDoc = await Album.findById(targetedAlbum)

        //pushing both of the ids to the respective documents
        userDoc.LikedAlbums.push(albumDoc)
        albumDoc.UserLikes += 1

        //saving documents after changes
        await userDoc.save()
        await albumDoc.save()

        //responding with response on the backend
        res.json({
            message:'success',
            payload: [userDoc, albumDoc]
        })
        console.log(userDoc, albumDoc);
    } catch (err) {
        console.log(err);
        res.json({
            message: 'failed to  add album to user favorite',
            payload: err
        })
    }
}


//function to delete the like
async function deleteUserFavoriteAlbum(req, res){
    try{
        let targetedUser = req.body.userId
        let targetedAlbum = req.body.albumId

        let userDoc = await User.findById(targetedUser)
        let albumDoc = await Album.findById(targetedAlbum)

        //finding the album in the user document
        let foundAlbumInUser = userDoc.LikedAlbums.indexOf(targetedAlbum)

        //splicing from the array
        userDoc.LikedAlbums.splice(foundAlbumInUser, 1)

        //decreasing the likes by 1
        albumDoc.UserLikes -= 1

        //saving documents after changes
        await userDoc.save()
        await albumDoc.save()

     
        res.json({
            message: 'success',
            payload: [userDoc, albumDoc]
        })
    } catch (err) {
        console.log(err);
        res.json({
            message: 'failed to remove like',
            payload: err
        })
    }
}

//adding favorite song
async function addUserFavoriteSong(req, res){
    try {

        let targetedUser = req.body.userId
        let targetedSong = req.body.songId

        let userDoc = await User.findById(targetedUser)
        let songDoc = await Song.findById(targetedSong)

        //should i be pushing entire document or only the target id
        userDoc.LikedSongs.push(songDoc)
        songDoc.UserLikes += 1

        await userDoc.save()
        await songDoc.save()

        res.json({
            message:'success',
            payload: [userDoc, songDoc]
        })
    } catch (err) {
        console.log(err);
        res.json({
            message: 'failed to  add song to user favorite',
            payload: err
        })
    }
}

//delete favorite song
async function deleteUserFavoriteSong(req, res){
    try{
        let targetedUser = req.body.userId
        let targetedSong = req.body.songId

        let userDoc = await User.findById(targetedUser)
        let songDoc = await Song.findById(targetedSong)

        let foundSongInUser = userDoc.LikedSongs.indexOf(targetedSong)

        userDoc.LikedSongs.splice(foundSongInUser, 1)

        songDoc.UserLikes -= 1

        await userDoc.save()
        await songDoc.save()

        res.json({
            message: 'success',
            payload: [userDoc, songDoc]
        })
    } catch (err) {
        console.log(err);
        res.json({
            message: 'failed to remove like from song',
            payload: err
        })
    }
}

//function to follow an artist
async function userFollowArtist(req, res){
    try {

        let targetedUser = req.body.userId
        let targetedArtist = req.body.artistId

        let userDoc = await User.findById(targetedUser)
        let artistDoc = await Artist.findById(targetedArtist)

        userDoc.ArtistsFollowed.push(artistDoc)
        artistDoc.Followers += 1

        await userDoc.save()
        await artistDoc.save()

        res.json({
            message:'success',
            payload: [userDoc, artistDoc]
        })
    } catch (err) {
        console.log(err);
        res.json({
            message: 'failed to follow artist',
            payload: err
        })
    }
}

//function to unfollow an artist
async function userUnfollowArtist(req, res){
    try{
        let targetedUser = req.body.userId
        let targetedArtist = req.body.artistId

        let userDoc = await User.findById(targetedUser)
        let artistDoc = await Artist.findById(targetedArtist)

        let foundArtistInUser = userDoc.ArtistsFollowed.indexOf(targetedArtist)

        userDoc.ArtistsFollowed.splice(foundArtistInUser, 1)

        artistDoc.Followers -= 1

        await userDoc.save()
        await artistDoc.save()

        res.json({
            message: 'success',
            payload: [userDoc, artistDoc]
        })
    } catch (err) {
        console.log(err);
        res.json({
            message: 'failed to unfollow artist',
            payload: err
        })
    }
}

//function to create a new user

module.exports = {
    getAllUsers,
    getOneUser,
    addUserFavoriteAlbum,
    deleteUserFavoriteAlbum,
    addUserFavoriteSong,
    deleteUserFavoriteSong,
    userFollowArtist,
    userUnfollowArtist
}

//IN ORDER TO ADD STUFF TO A SPECIFIC USER OR ACT AS IF YOURE LOGGED INTO ONE USER, YOU NEED TO PASS THE EJS FORM THE USERS ID
//THAT WAY IT HAS ACCESS TO IT AND CAN BE USED TO FETCH OTHER STUFF
//SOMETHING LIKE {user: "12345667"} IN THE CONTROLLER