const {DataTypes} = require('sequelize');
const sequelize = require("../config/db");
const bcrypt=require('bcrypt');


const Users = sequelize.define('Users', {
    IdUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    hooks: {
        beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.Password=bcrypt.hashSync(user.Password, salt);
        }
    },
    freezeTableName: true,
    timestamps: false
});

Users.prototype.validatePassword = function(passw){
    return bcrypt.compareSync(passw, this.Password)
}

module.exports = Users;