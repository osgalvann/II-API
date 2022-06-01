const User = require('../models/User');

function retrieveUsers(req, res) {
    User.findAll()
        .then(users => res.status(200).send(users))
}

function userSignUp(req, res) {
    let body = req.body;
    User.create(body)
        .then(user => res.status(200).send(user))
}

function editUser(req, res) {
    let body = req.body;
    let id = req.params.id;
    User.update(body, {
        where: {
            IdUser: id
        }
    })
        .then(user => res.status(200).send(user))
}

function deleteUser(req, res) {
    let id = req.params.id;
    User.destroy({
        where: {IdUser: id}
    })
        .then(r => res.status(200).send("Deleted"))
}

module.exports = {
    retrieveUsers,
    userSignUp,
    editUser,
    deleteUser
}