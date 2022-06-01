const router = require('express').Router();

const{
    retrieveUserData,
    collectUserData,
    editUserData,
    deleteUserData
} = require('../controllers/userData');
router.get('/', retrieveUserData);
router.post('/', collectUserData);
router.put('/:id',editUserData);
router.delete('/:id',deleteUserData);

module.exports=router;