const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(
    'sql5496890',
    'sql5496890',
    '11NvzF3dl9',
    {
        host: 'sql5.freemysqlhosting.net', //host
        dialect: 'mysql' //dbms
    });
module.exports = sequelize;
