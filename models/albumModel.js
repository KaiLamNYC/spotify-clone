const mongoose = require('mongoose')

//needed to setup the relational data
const Schema = mongoose.Schema;

//setting for each document within this collection/schema
const albumSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
            lowercase: true
        },
        Artist: [{
            type: Schema.Types.ObjectId,
            ref: 'Artist'
        }],
        Songs: [{
            type: Schema.Types.ObjectId,
            ref: "Song"
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

//making the album model using the album schema above
const Album = mongoose.model('Album', albumSchema)


//exporting the album model
module.exports = Album;