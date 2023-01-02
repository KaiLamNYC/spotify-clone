const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const songsSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
            lowercase: true
        },
        Album: {
            type: Schema.Types.ObjectId,
            ref: "Album"
        },
        Artists: [{
            type: Schema.Types.ObjectId,
            ref: "Artist"
        }],
        UserLikes: {
            type: Number,
            required: false,
            default: 0
        },
        Img: {
            type: String,
            required: true,
            unique: false,
        },
    }
)

const Song = mongoose.model('Song', songsSchema)

module.exports = Song;