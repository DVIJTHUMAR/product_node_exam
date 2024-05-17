const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Product').then(()=>{
        console.log("db conected......");
}).catch(err => console.log(err));

module.exports = mongoose;



