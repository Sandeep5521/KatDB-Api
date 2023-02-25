const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/mdb") //{ useNewUrlParser: true, useUnifiedTopology: true}
    .then(() => {
        console.log("connection Successful");
    }, (err) => {
        console.log(err);
    });