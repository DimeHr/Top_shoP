'use strict'

const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    name: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
