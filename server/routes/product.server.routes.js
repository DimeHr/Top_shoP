'use strict';

const productController  = require('../controllers/product.server.controller')

module.exports = function(app) {
    app.route('/api/product')
        .get(productController.find)
        .post(productController.create);

};
