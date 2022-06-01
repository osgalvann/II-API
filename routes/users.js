const router = require('express').Router();

const{
    retrieveUsers,
    userLogIn,
    userSignUp,
    editUser,
    deleteUser
} = require('../controllers/user');
router.get('/', retrieveUsers);
router.post('/login', userLogIn)
router.post('/', userSignUp);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

module.exports=router;