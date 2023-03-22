require('dotenv').config();
const express = require('express');
const app = express();
const con = require('./src/db.js');
const PORT = process.env.port || 3000;
const Movies = require('./models/movies.js');
const Tags = require('./models/tags.js');
const Shows = require('./models/shows.js');
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})

app.get('/movies', async (req, res) => {
    if (req.query.name) {
        const str = req.query.name;
        try {
            const tmp = await Movies.findOne({ movieName: str }).select({
                date: 0,
                __v: 0
            });
            res.send(tmp);
        } catch (error) {
            res.sendStatus(502);
        }

    }
    else if (req.query.tag) {
        try {
            const tmp = await Movies.find({ movieTags: req.query.tag }).select({
                movieDirectors: 0,
                movieDownloads: 0,
                movieTags: 0,
                movieShots: 0,
                movieReview: 0,
                date: 0,
                __v: 0
            });
            res.send(tmp);
        } catch (error) {
            res.sendStatus(502)
        }
    }
    else if (req.query.year) {
        try {
            const nums = Number.parseInt(req.query.year);
            const tmp = await Movies.find({ releaseYear: nums }).select({
                movieDirectors: 0,
                movieDownloads: 0,
                movieTags: 0,
                movieShots: 0,
                movieReview: 0,
                date: 0,
                __v: 0
            });
            res.send(tmp);
        } catch (error) {
            res.sendStatus(502);
        }
    }
    else if (req.query.id) {
        try {
            const tmp = await Movies.findOne({ _id: req.query.id }).select({
                date: 0,
                __v: 0
            });
            res.send(tmp);
        } catch (error) {
            res.sendStatus(502);
        }
    }
    else if (req.query.page && req.query.limit) {
        const Count = await Movies.find().count();
        const page = Number(req.query.page);
        const Limit = Number(req.query.limit);
        const Skip = (page - 1) * Limit;

        if (Skip < Count) {
            try {
                const tmp = await Movies.find().select({
                    movieDirectors: 0,
                    movieShots: 0,
                    movieReview: 0,
                    movieDescription: 0,
                    movieDownloads: 0,
                    date: 0,
                    __v: 0
                }).skip(Skip).limit(Limit).sort({ date: -1 });
                res.send(tmp);
            } catch (error) {
                res.sendStatus(502);
            }
        }
        else res.sendStatus(404);
    }
    else res.sendStatus(400);
})

app.post('/movies', async (req, res) => {
    const tmp = await Movies.insertMany([req.body]);
    const li = req.body.movieTags;
    for (let i = 0; i < li.length; i++) {
        let result = await Tags.updateOne({ tagName: li[i] }, {
            $inc: {
                tagMovies: 1
            }
        })
        console.log(result);
    }
    res.send(tmp);
})

app.patch('/movies', async (req, res) => { // for adding episodes
    const id = req.query.id;
    try {
        const tmp = await Shows.findOneAndUpdate({ _id: id }, {
            $set: {
                movieShots: req.body.shots,
                "movieDownloads.hindi": req.body.hindi,
                "movieDownloads.english": req.body.english,
                "movieDownloads.subbed": req.hindi,
                date: Date.now()
            }
        });
        res.send(tmp);
    } catch (error) {
        res.sendStatus(502);
    }
})

app.get('/tags', async (req, res) => {
    const tmp = await Tags.find().select({
        _id: 0,
        __v: 0
    });
    res.send(tmp);
})

app.patch('/tags', async (req, res) => {
    const tmp = await Tags.insertMany([req.body]);
    res.send(tmp);
})

app.get('/shows', async (req, res) => {
    if (req.query.name) {
        const str = req.query.name;
        try {
            const tmp = await Shows.find({ showName: str }).select({
                movieCreators: 0,
                showEpisodes: 0,
                showShots: 0,
                showReview: 0,
                date: 0,
                __v: 0
            });
            res.send(tmp);
        } catch (error) {
            res.sendStatus(502);
        }

    }
    else if (req.query.tag) {
        try {
            const tmp = await Shows.find({ showTags: req.query.tag }).select({
                movieCreators: 0,
                showEpisodes: 0,
                showShots: 0,
                showReview: 0,
                showEpisodes: 0,
                date: 0,
                __v: 0
            });
            res.send(tmp);
        } catch (error) {
            res.sendStatus(502);
        }
    }
    else if (req.query.year) {
        try {
            const tmp = await Shows.find({ releaseYear: req.query.year }).select({
                movieCreators: 0,
                showEpisodes: 0,
                showShots: 0,
                showReview: 0,
                showEpisodes: 0,
                date: 0,
                __v: 0
            });
            res.send(tmp);
        } catch (error) {
            res.sendStatus(502);
        }
    }
    else if (req.query.id) {
        try {
            const tmp = await Shows.findOne({ _id: req.query.id }).select({
                date: 0,
                __v: 0
            });
            res.send(tmp);
        } catch (error) {
            res.sendStatus(502);
        }
    }
    else if (req.query.page && req.query.limit) {
        const Count = await Shows.find().count();
        const page = Number(req.query.page);
        const Limit = Number(req.query.limit);
        const Skip = (page - 1) * Limit;

        if (Skip < Count) {
            try {
                const tmp = await Shows.find().select({
                    showCreators: 0,
                    showShots: 0,
                    showReview: 0,
                    showDescription: 0,
                    showEpisodes: 0,
                    date: 0,
                    __v: 0
                }).skip(Skip).limit(Limit).sort({ date: -1 });
                res.send(tmp);
            } catch (error) {
                res.sendStatus(502);
            }
        }
        else res.sendStatus(404);
    }
    else res.sendStatus(400);
})

app.post('/shows', async (req, res) => {
    const tmp = await Shows.insertMany([req.body]);
    const li = req.body.showTags;
    for (let i = 0; i < li.length; i++) {
        let result = await Tags.updateOne({ tagName: li[i] }, {
            $inc: {
                tagShows: 1
            }
        })
        console.log(result);
    }
    res.send(tmp);
})

app.patch('/shows', async (req, res) => { // for adding episodes
    const id = req.query.id;
    try {
        const tmp = await Shows.findOneAndUpdate({ _id: id }, {
            $push: { showEpisodes: req.body },
            $set: {
                date: Date.now()
            }
        });
        res.send(tmp);
    } catch (error) {
        res.sendStatus(502);
    }
})

app.get('/random', async (req, res) => {
    if (req.query.type == 'movie') {
        try {
            const tmp = await Movies.aggregate([
                { $sample: { size: 1 } },
                {
                    $project: {
                        date: 0,
                        __v: 0
                    }
                }
            ]);
            res.send(tmp);
        } catch (error) {
            res.sendStatus(502);
        }
    }
    else if (req.query.type == 'show') {
        try {
            const tmp = await Shows.aggregate([
                { $sample: { size: 1 } },
                {
                    $project: {
                        date: 0,
                        __v: 0
                    }
                }
            ]);
            res.send(tmp);
        } catch (error) {
            res.sendStatus(502);
        }
    }
    else res.sendStatus(400);
})

app.get('*', (req, res) => {
    res.sendStatus(404);
})
const start = async () => {
    await con(process.env.MONGODB_URL);
    app.listen(PORT, () => {
        console.log('server runs');
    })
}
start();

