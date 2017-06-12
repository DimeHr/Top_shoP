'use strict'

const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// create a schema
const productSchema = new Schema({
    name: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
