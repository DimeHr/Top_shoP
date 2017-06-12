'use strict';

const userController  = require('../controllers/user.server.controller')

module.exports = function(app) {
    app.route('/api/user')
        .get(userController.find)
        .post(userController.create);

};
