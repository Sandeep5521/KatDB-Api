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
    showDescription: {
        type: String,
        required: true
    },
    showThumbnail: {
        type:String,
        required:true
    },
    showTags: {
        type: Array,
        validate(val) {
            for (let i = 0; i < val.length; i++) {
                val[i] = val[i].toLowerCase();
            }
        }
    },
    showSeasons: [
        {
            _id:false,
            seasonId: {
                type: String,
                lowercase: true,
                required: true
            },
            releaseYear: {
                type: Number,
                required: true
            },
            seasonThumbnail: {
                type:String,
                required:true
            },
            seasonShots:Array,
            episodes: [
                {
                    _id:false,
                    episodeId: {
                        type: String,
                        lowercase: true,
                        required: true
                    },
                    episodeName: {
                        type: String,
                        lowercase: true
                    },
                    downloads: {
                        hindi: Array,
                        english: Array
                    }
                }
            ]
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})


const Shows = new mongoose.model("Shows", movieSchema);
module.exports = Shows;