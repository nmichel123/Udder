module.exports = function (sequelize, DataTypes) {
    var Udder = sequelize.define("Udder", {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    Udder.associate = function(models) {
        Udder.belongsTo(models.Author, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Udder
};