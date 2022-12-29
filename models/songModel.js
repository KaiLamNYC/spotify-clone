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
        UserLikes: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    }
)

const Song = mongoose.model('Song', songSchema)

module.exports = Song;