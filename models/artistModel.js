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
        }]
    }
)

const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist;