module.exports = (sequelize, Sequelize) => {
    const Udder = sequelize.define('udder', {
        udder: {
            type: Sequelize.STRING
        },
        avi: {
            type: Sequelize.IMAGE
        }
    });

    return Udder;
}

// Experiment with BLOB for passing user avi into the udders 
// Find a way to upload an image passed as an avi & have that be passed into JSON for db