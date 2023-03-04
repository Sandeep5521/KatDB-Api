const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
// mongoose.connect("mongodb://localhost:27017/mdb") //{ useNewUrlParser: true, useUnifiedTopology: true}
const tagSchema = mongoose.Schema({
    tagName: {
        type: String,
        required: true,
        lowercase: true
    },
    tagDescription: String,
    tagMovies: {
        type: Number,
        default: 0
    },
    tagShows: {
        type: Number,
        default: 0
    }
})

const Tags = new mongoose.model("Tags", tagSchema);
module.exports = Tags;
// const createDocument = async () => {
//     try {
//         const action = new Tags({
//             tagName: "action",
//             tagDescription: "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.",
//             tagMovies: 3
//         });
//         const adventure = new Tags({
//             tagName: "adventure",
//             tagDescription: "Adventure film is a genre that revolves around the conquests and explorations of a protagonist.",
//             tagMovies: 1
//         })
//         const hindi = new Tags({
//             tagName: "hindi",
//             tagDescription: "Containing all hindi dubbed or hindi language movies.",
//             tagMovies: 5
//         })
//         const english = new Tags({
//             tagName: "english",
//             tagDescription: "Containing all english language movies.",
//             tagMovies: 4
//         })
//         const crime = new Tags({
//             tagName: "crime",
//             tagDescription: "Crime dramas are films that focus on the moral dilemmas of criminals. They differ from crime thrillers as the films generally focus on a grimmer and more realistic portrayal of the criminal world over violence and gunplay sequences.",
//             tagMovies: 3
//         })
//         const thriller = new Tags({
//             tagName: "thriller",
//             tagDescription: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that evokes excitement and suspense in the audience.",
//             tagMovies: 3
//         })
//         const mystery = new Tags({
//             tagName: "mystery",
//             tagDescription: "A mystery film is a genre of film that revolves around the solution of a problem or a crime.",
//             tagMovies: 2
//         })
//         const comedy = new Tags({
//             tagName: "comedy",
//             tagDescription: "A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through the amusement.",
//             tagMovies: 2
//         })
//         const fantasy = new Tags({
//             tagName: "fantasy",
//             tagDescription: "Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds.",
//             tagMovies: 1
//         })
//         const scifi = new Tags({
//             tagName: "scifi",
//             tagDescription: "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science,",
//             tagMovies: 1
//         })
//         const romance = new Tags({
//             tagName: "romance",
//             tagDescription: "Romance films, romance movies, or ship films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters.",
//             tagMovies: 2
//         })
//         const res = await Tags.insertMany([action,adventure,hindi,english,crime,thriller,mystery,comedy,fantasy,scifi,romance]);
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// createDocument();