const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
// mongoose.connect("mongodb://localhost:27017/mdb") //{ useNewUrlParser: true, useUnifiedTopology: true}
//     .then(() => {
//         //console.log("connection Successful");
//     }, (err) => {
//         console.log(err);
//     });
const movieSchema = mongoose.Schema({
    showName: {
        type: String,
        lowercase: true,
        required: true
    },
    seasonNum: String,
    showDescription: {
        type: String,
        required: true
    },
    releaseYear: String,
    showThumbnail: {
        type: String,
        required: true
    },
    showCreators: Array,
    showTags: {
        type: Array,
        validate(val) {
            for (let i = 0; i < val.length; i++) {
                val[i] = val[i].toLowerCase();
            }
        }
    },
    showShots: Array,
    showEpisodes: [
        {
            _id: false,
            episodeId: {
                type: String,
                lowercase: true,
                required: true
            },
            episodeName: {
                type: String,
                lowercase: true
            },
            episodeNum: String,
            downloads: {
                hindi: Array,
                english: Array,
                subbed:Array
            }
        }
    ],
    showReview: String,
    date: {
        type: Date,
        default: Date.now
    }
})


const Shows = new mongoose.model("Shows", movieSchema);
module.exports = Shows;