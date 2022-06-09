const User = require('../models/User');

async function retrieveUsers(req, res) {
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch {
        res.status(401).send("An error has ocurred");
    }
}

async function userLogIn(req, res) {
    let email = req.body.Email;
    let passw = req.body.Password;
    const user = await User.findOne({
        where: { Email: email }
    })
    try {
        if (user.validatePassword(passw)) {
            res.status(200).send(user)
        }
        else {
            res.status(401).send("Unable to log in")
        }
    } catch {
        res.status(401).send("An error has ocurred");
    }
}

async function userSignUp(req, res) {
    try {
        let body = req.body;
        const user = await User.create(body);
        res.status(200).send(user);
    } catch {
        res.status(401).send("An error has ocurred");
    }
}

async function editUser(req, res) {
    try {
        let body = req.body;
        let id = req.params.id;
        const user = await User.update(body, {
            where: {
                IdUser: id
            }
        })
        res.status(200).send(user);
    } catch {
        res.status(401).send("An error has ocurred");
    }
}

async function deleteUser(req, res) {
    try {
        let id = req.params.id;
        await User.destroy({
            where: { IdUser: id }
        })
        res.status(200).send("Deleted")
    } catch {
        res.status(401).send("An error has ocurred");
    }
}

module.exports = {
    retrieveUsers,
    userLogIn,
    userSignUp,
    editUser,
    deleteUser
}