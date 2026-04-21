const Sequelize = require('sequelize');
const db_config = require('./../db_config');

const Book = db_config.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genreId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {timestamps: false});
8
module.exports = Book;