
//setting up the user router functionality
const express = require('express')
const router = express.Router()

//importing the db functions to use as callbacks for routes
const {
    getAllUsers,
    getOneUser,
    addUserFavoriteAlbum,
    deleteUserFavoriteAlbum,
    addUserFavoriteSong,
    deleteUserFavoriteSong,
    userFollowArtist,
    userUnfollowArtist,
    createNewUser,
    deleteUser
} = require('../../controller/api/userController')

//get route to get all the users
//localhost:3000/api/users/allUsers
router.get('/allUsers', getAllUsers)

//getting a specific user by name
//localhost:3000/api/users/oneUser/name
router.get('/oneUser/:name', getOneUser)

//adding an album to the user favorites and adding one to userlikes for album
//localhost:3000/api/users/add-favorite-album
router.post('/add-favorite-album', addUserFavoriteAlbum)

//deleting a like
//localhost:3000/api/users/delete-favorite-album
router.delete('/delete-favorite-album', deleteUserFavoriteAlbum)

//adding a song to user favorites
//localhost:3000/api/users/add-favorite-song
router.post('/add-favorite-song', addUserFavoriteSong)

//deleting a song from user favorites
//localhost:3000/api/users/delete-favorite-song
router.delete('/delete-favorite-song', deleteUserFavoriteSong)

//follow an artist
//localhost:3000/api/users/follow-artist
router.post('/follow-artist', userFollowArtist)

//unfollow an artist
//localhost:3000/api/users/unfollow-artist
router.delete('/unfollow-artist', userUnfollowArtist)

//create new user
//localhost:3000/api/users/create-user
router.post('/create-user', createNewUser)

//deleting a user
//localhost:3000/api/users/delete-user/:name

router.delete('/delete-user/:name', deleteUser)

module.exports = router
