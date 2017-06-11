const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    name: String
});

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
