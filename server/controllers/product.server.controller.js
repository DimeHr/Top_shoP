'use strict'

const Product = require("../models/product.server.model")

module.exports = {
    create(req, res) {
        Product.create(req.body, (err, user) => {
            if (err) return res.status(500).send('Something broke!')
            return res.send(user)
        })
    },
    find(req, res) {
        Product.find().exec((err, users) => {
            if (err) return res.status(500).send('Something broke!')
            return res.send(users);
        })
    }
}
