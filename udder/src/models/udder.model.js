module.exports = (sequelize, Sequelize) => {
    const Udder = sequelize.define('udder', {
        udder: {
            type: Sequelize.STRING
        },
    });

    return Udder;
}

// Experiment with BLOB for passing user avi into the udders 