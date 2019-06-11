const mongoose = require('mongoose'); 
const Schema = mongoose.Schema

let userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('User', userSchema); 