module.exports = app => {
    const udders = require('../controllers/udder.controller')

    var router = require('express').Router();

    router.post('/', udders.create)
}

