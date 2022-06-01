const router = require('express').Router();

const{
    retrieveUsers,
    userSignUp,
    editUser,
    deleteUser
} = require('../controllers/user');
router.get('/', retrieveUsers);
<<<<<<< HEAD
router.post('/login', userLogIn)
=======
>>>>>>> 3bb175a2956ba7d603d6d04f81c48a7bf65ba224
router.post('/', userSignUp);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

module.exports=router;