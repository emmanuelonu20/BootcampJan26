const Sequelize = require('sequelize');

let database_name = 'booksdb';
let username = 'root';
let password = 'secret';
let port = 3306;

module.exports = new Sequelize(database_name, username, password, {dialect: 'mariadb', port: port});