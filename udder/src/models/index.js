const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');

// const { dialect } = require('../config/db.config'); 
// ^^ Above not required as long as dialect is declared below as shown

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.udders = require('./udder.model.js')(sequelize,Sequelize)

module.exports = db; 