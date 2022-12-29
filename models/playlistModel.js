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
        //changed to creator since thats the 'owner' of the playlist
        Creator: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        //users can like the playlist then it will add to "library" and basically with all playlists
        UserLikes: {
            type: Number,
            required: true,
            default: 0
        }
        
       
    }
)

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist;