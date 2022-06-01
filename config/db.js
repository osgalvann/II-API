const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST, //host
        dialect: 'mysql' //dbms
    });
module.exports = sequelize;
