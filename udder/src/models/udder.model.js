module.exports = (sequelize, Sequelize) => {
    const Udder = sequelize.define('udder', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Udder
}