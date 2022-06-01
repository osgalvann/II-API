const {DataTypes} = require('sequelize');
const sequelize = require("../config/db");

const UserData = sequelize.define('UserData', {
    IdUserData: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    IdUser: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdInvestorProfile: {
        type: DataTypes.INTEGER
    },
    Names: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    FirstLastName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SecondLastName: {
        type: DataTypes.TEXT
    },
    DateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Country: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps: false
});


module.exports = UserData;