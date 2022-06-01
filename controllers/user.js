const User = require('../models/User');

function retrieveUsers(req, res) {
    User.findAll()
        .then(users => res.status(200).send(users))
}

function userLogIn(req, res) {
    let id = req.params.id;
    let passw = req.body.Password;
    User.findOne({
        where: { IdUser: id }
    })
        .then(user => {
            if (user.validatePassword(passw)) {
                res.status(200).send(user)
            }
            else {
                res.status(401).send("Unable to log in")
            }
        })


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
        where: { IdUser: id }
    })
        .then(r => res.status(200).send("Deleted"))
}

module.exports = {
    retrieveUsers,
    userLogIn,
    userSignUp,
    editUser,
    deleteUser
}