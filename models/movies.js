const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
// mongoose.connect("mongodb://localhost:27017/mdb") //{ useNewUrlParser: true, useUnifiedTopology: true}
//     .then(() => {
//         //console.log("connection Successful");
//     }, (err) => {
//         console.log(err);
//     });
const movieSchema = mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        lowercase: true
    },
    movieDescription: {
        type:String,
        required:true
    },
    movieThumbnail: {
        type:String,
        required:true
    },
    releaseYear:{
        type:Number,
        required:true
    },
    movieTags: {
        type: Array,
        validate(val) {
            for (let i = 0; i < val.length; i++) {
                val[i] = val[i].toLowerCase();
            }
        }
    },
    movieDownloads: {
        english : Array,
        hindi : Array
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const Movies = new mongoose.model("Movies", movieSchema);
module.exports = Movies;
// const createDocument = async () => {
//     try {
//         const movie = new Movies({
//             movieName: "Widow",
//             movieDescription: "Descriptions",
//             movieThumbnail: "/httthth",
//             movieCategories: ["Action", "Adventure"],
//             movieDownloads: {
//                 Hindi:[],
//                 English:[]
//             },
//         });
//         const res = await Movies.insertMany([movie]);
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// createDocument();