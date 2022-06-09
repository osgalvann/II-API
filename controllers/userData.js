const sequelize = require('../config/db');
const UserData = require('../models/UserData');

async function retrieveUserData(req, res) {
    try {
        const udata = await UserData.sequelize.query(`
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
            { type: sequelize.QueryTypes.SELECT })
        res.status(200).send(udata);
    } catch {
        res.status(401).send("An error has ocurred");
    }
}

async function collectUserData(req, res) {
    try {
        let body = req.body;
        const data = await UserData.create(body);
        res.status(200).send(data);
    } catch {
        res.status(401).send("An error has ocurred");
    }
}

async function editUserData(req, res) {
    try {
        let body = req.body;
        let id = req.params.id;
        const data = await UserData.update(body, {
            where: {
                IdUser: id
            }
        })
        res.status(200).send(data);
    } catch {
        res.status(401).send("An error has ocurred");
    }
}

async function deleteUserData(req, res) {
    try {
        let id = req.params.id;
        await UserData.destroy({
            where: { IdUser: id }
        })
        res.status(200).send("Deleted");
    } catch {
        res.status(401).send("An error has ocurred");
    }
}

module.exports = {
    retrieveUserData,
    collectUserData,
    editUserData,
    deleteUserData
}