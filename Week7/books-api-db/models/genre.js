const Sequelize = require('sequelize');
const db_config = require('./../db_config');

const Genre = db_config.define('genre', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    genreName: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: false});

module.exports = Genre;