const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema(
    {
        UserName: {
            type: String,
            required: true,
            unique: true  
        },
        Img: {
            type: String,
            required: false,
            unique: false,
            defaul: 'https://i.kym-cdn.com/photos/images/newsfeed/001/865/673/cc9.png'
        },
        ArtistsFollowed: [{
            type: Schema.Types.ObjectId,
            ref: 'Artist'
        }],
        LikedSongs: [{
            type: Schema.Types.ObjectId,
            ref: 'Song'
        }],
        LikedAlbums: [{
            type: Schema.Types.ObjectId,
            ref: 'Album'
        }],
        //array of songs. need to add crud functionality to this as well i think
        //user:playlists one:many relationship. user can have many playlists
        //need to be able to create playlists and add songs etc
        //maybe later make some sort of search function idk too much work
        Playlists: [{
            type: Schema.Types.ObjectId,
            ref: 'Playlist'
        }],
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User;
