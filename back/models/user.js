const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email :{type : String, required : true, unique : true, lowercase: true, trim:true},
    password : {type : String, required : true, max:20, minLength:8},
    isAdmin : {type: Boolean, require: true, default: false},

}, {timestamps : true,});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);