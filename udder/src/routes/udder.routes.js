module.exports = app => {
    const udders = require('../controllers/udder.controller')

    var router = require('express').Router();

    router.post('/', udders.create);

    router.get('/', udders.findAll);

    router.get('/:id', udders.findOne);

    router.put('/:id', udders.update);

    router.delete('/:id', udders.delete);

    router.delete('/', udders.deleteAll);

    app.use('/api/udders', router);
};

