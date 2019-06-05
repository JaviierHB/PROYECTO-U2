var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    nc: {
        type:String,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    carrer: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },  
    sendmail: {
        type: Boolean,
        default: false
    },
});