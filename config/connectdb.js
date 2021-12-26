const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/homework').then(
    ()=>{
        console.log('connected!!!');
    },
    (err)=>{
        console.log(err);
    }
);



module.exports = mongoose;