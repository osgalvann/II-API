const QueryTypes = require('sequelize').type;
const sequelize = require('../config/db');
const UserData = require('../models/UserData');

function retrieveUserData(req, res) {
    UserData.sequelize.query(`
    SELECT Users.IdUser,
    UserData.IdInvestorProfile,
    UserData.Names,
    UserData.FirstLastName,
    UserData.SecondLastName,
    UserData.DateOfBirth,
    UserData.Country,
    Users.Email
    FROM Users JOIN UserData
    ON Users.IdUser = UserData.IdUser;`,
    {type: sequelize.QueryTypes.SELECT})
        .then(udata => res.status(200).send(udata))
}

function collectUserData(req, res) {
    let body = req.body;
    UserData.create(body)
        .then(data => res.status(200).send(data))
}

function editUserData(req, res) {
    let body = req.body;
    let id = req.params.id;
    UserData.update(body, {
        where: {
            IdUser: id
        }
    })
        .then(data => res.status(200).send(data))
}

function deleteUserData(req, res) {
    let id = req.params.id;
    UserData.destroy({
        where: {IdUser: id}
    })
        .then(r => res.status(200).send("Deleted"))
}

module.exports = {
    retrieveUserData,
    collectUserData,
    editUserData,
    deleteUserData
}