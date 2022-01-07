module.exports = (sequelize, Sequelize) => {
    const Udder = sequelize.define('udders', {
        udder: {
            type: Sequelize.STRING
        },
    });

    return Udder
}