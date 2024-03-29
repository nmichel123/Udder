const db = require('../models');
const Udder = db.udders;
const Op = db.Sequelize.Op

// Create & Save new Udders
exports.create = (req, res) => {

    if (!req.body.udder) {
        res.status(400).send({
            message: 'sry doesnt work'
        });
        return
    }

    const udder = {
        udder: req.body.udder,
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
    const udder = req.query.udder;
    var condition = udder ? { udder: {[Op.like]: `%${udder}%` } } : null;

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
    const id = req.params.id;

    Udder.findByOne(id)
        .then(data => {
            if(data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Can't find the Udder you're looking for. This one ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'You screwed up! Cant find that specific udder' + id
            })
        })

};

// Update an Udder by ID in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Udder.update(req.body, {
        where: { id : id }
    })
    .then(num => {
        if(num === 1 ) {
            res.send({
                message: "Udder updated successfully"
            });
        } else {
            res.send({
                message: `Oops. Can't update that specific Udder. The one numbered ${id}. Too bad.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Big error updating Udder. This one to be exact ${id}`
        });
    });
};

// Delete an Udder with the specified ID in the request 
exports.delete = (req, res) => {
    const id =  req.params.id;

    Udder.destroy({
        where: { id : id }
    })
    .then(num => {
        if (num === 1) {
            res.send({
                message: 'Udder deleted! Coward!'
            });
        } else {
            res.send({
                message: `Can't deleted this specific one. This one ${id}. You're a coward for trying!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Can't get rid of that Udder. This one ${id} coward.`
        })
    })
};

// Delete all Udders from the database 
exports.deleteAll = (req, res) => {
    Udder.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Udders deleted successfully. Coward.`})
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Something went wrong deleting the udders. Youre still a coward'
            });
        });
};

// Find all published Udders
exports.findAllPublished = (req, res) => {
    Udder.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || `Couldn't find em all. Sucks. Our bad.`
            });
        });
};

//Make sure to restart server after big changes