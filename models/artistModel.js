const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const artistSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        Albums: [{
            type: Schema.Types.ObjectId,
            ref: "Album"
        }],
        //everytime somebody clicks the follow, adds one and also adds to users follow list
        Followers: {
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

const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist;