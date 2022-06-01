const router = require('express').Router();

const{
    retrieveUsers,
    userSignUp,
    editUser,
    deleteUser
} = require('../controllers/user');
router.get('/', retrieveUsers);
router.post('/', userSignUp);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

module.exports=router;