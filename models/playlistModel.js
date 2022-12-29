const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const playlistSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Songs: [{
            type: Schema.Types.ObjectId,
            ref: 'Song'
        }],
        //one to many relationship
        //one user can have many playlists but a playlist can only be 'owned' by one user
        User: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
        
       
    }
)

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist;