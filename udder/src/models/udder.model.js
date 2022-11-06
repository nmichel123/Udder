module.exports = (sequelize, Sequelize) => {
    const Udder = sequelize.define('udder', {
        udder: {
            type: Sequelize.STRING
        },
        // avi: {
        //     type: Sequelize.IMAGE
        // }
    });

    return Udder;
}

//Fix avi issue