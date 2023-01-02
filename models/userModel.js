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
            required: true,
            unique: false,
            default: 'https://i.kym-cdn.com/photos/images/newsfeed/001/865/673/cc9.png'
        },
        //artists in your library is artistfollowed but is different from your profile which has following at the bottom including following users
        //artist followed  displayed in library view and profile following view
        //but users followed only displayed in profile following view
        //not gonna add cuz rlly no benefit in rlly following users so dont worry about the view just keep it simple stupid
        //just going to do the artist followed since that makes more sense
        //they prob just did it to add a social media aspect
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
        //the libraru view concats the likedplaylist, user created playlist and also a tab for all liked songs into one libraby/playlist
        //technically liked songs is a playlist as well
        //except for liked albums which is separate tab
        //basically just a view called library which agregates all the users data basically
        LikedPlaylists: [{
            type: Schema.Types.ObjectId,
            ref: 'Playlist'
        }],
        
        //array of songs. need to add crud functionality to this as well i think
        //user:playlists one:many relationship. user can have many playlists
        //need to be able to create playlists and add songs etc
        //maybe later make some sort of search function idk too much work
        CreatedPlaylists: [{
            type: Schema.Types.ObjectId,
            ref: 'Playlist'
        }],
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User;
