const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    sname:{
        type:String,
        required:true
    }
})


const User = mongoose.model('LoversDB', userSchema);

module.exports = User;