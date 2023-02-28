const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const url = 'mongodb+srv://sundeep5521:ltX3w2FE561oyB1e@cluster0.aiucyms.mongodb.net/?retryWrites=true&w=majority'
 //{ useNewUrlParser: true, useUnifiedTopology: true}
const con=()=>{
    return mongoose.connect(url,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = con;