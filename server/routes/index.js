const
    routes          = require('express').Router(),
    userController  = require('../controllers/user.controller')

routes.route('/api/user')
    .get(userController.find)
    .post(userController.create);

module.exports = routes;
