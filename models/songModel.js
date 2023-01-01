const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const songSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
            lowercase: true
        },
        Artists: [{
            type: Schema.Types.ObjectId,
            ref: "Artist"
        }],
        UserLikes: {
            type: Number,
            required: true,
            default: 0
        },
        Img: {
            type: String,
            required: false,
            unique: false,
        },
    }
)

const Song = mongoose.model('Song', songSchema)

module.exports = Song;