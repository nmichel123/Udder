const db = require('../models');
const Udder = db.udders;
const Op = db.Sequelize.Op

// Create & Save new Udders
exports.create = (req, res) => {
    //NODE JS PROGRAM EMPTY PUT IT HERE
    if (!req.body.title) {
        res.status(400).send({
            message: 'sry doesnt work'
        });
        return
    }

    const udder = {
        title: req.body.title,
        published: req.body.published ? req.body.published: false
    };
        Udder.create(udder)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "You screwed up! It's your fault!"
            });
        })
};

// Retrieve all Udders
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: {[Op.like]: `%${title}%` } } : null;

    Udder.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "You screwed up! It's your fault! Can't retrieve udders"
            });
        });

};

// Find a single Udder with an ID
exports.findOne = (req, res) => {

};

// Update an Udder by ID in the request
exports.update = (req, res) => {

};

// Delete an Udder with the specified ID in the request 
exports.delete = (req, res) => {

};

// Delete all Udders from the database 
exports.deleteAll = (req, res) => {

};

// Find all published Udders
exports.findAllPublished = (req, res) => {

};