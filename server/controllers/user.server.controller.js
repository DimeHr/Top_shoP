'use strict'

const User = require("../models/user.server.model")

module.exports = {
    create(req, res) {
        User.create(req.body, (err, user) => {
            if (err) return res.status(500).send('Something broke!')
            return res.send(user)
        })
    },
    find(req, res) {
        User.find().exec((err, users) => {
            if (err) return res.status(500).send('Something broke!')
            return res.send(users)
        })
    }
}
