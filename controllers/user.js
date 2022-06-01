const User = require('../models/User');

function retrieveUsers(req, res) {
    User.findAll()
        .then(users => res.status(200).send(users))
}

<<<<<<< HEAD
function userLogIn(req, res) {
    let email = req.body.Email;
    let passw = req.body.Password;
    User.findOne({
        where: { Email: email }
    })
        .then(user => {
            if (user.validatePassword(passw)) {
                res.status(200).send(user)
            }
            else {
                res.status(401).send("Unable to log in")
            }
        })
        .catch(r=>res.status(401).send("Error"))
}

=======
>>>>>>> 3bb175a2956ba7d603d6d04f81c48a7bf65ba224
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