const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
 //{ useNewUrlParser: true, useUnifiedTopology: true}
const con=(url)=>{
    return mongoose.connect(url,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('db connected');
    },(err)=>{
        console.log(err);
    });
}

module.exports = con;