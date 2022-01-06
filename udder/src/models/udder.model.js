module.exports = (sequelize, Sequelize) => {
    const Udder = sequelize.define('udder', {
        title: {
            type: Sequelize.STRING
        },
    });

    return Udder
}