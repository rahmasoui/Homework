const mongoose = require('mongoose');


let User = mongoose.model('User', {
    
    name: String,
    lastName: String,
    age: Number,
    adresse: String
});




module.exports = User;