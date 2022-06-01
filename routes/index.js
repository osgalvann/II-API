let router = require('express').Router();
router.get('/',(req,res)=>{
    res.send("Hello")
})

router.use('/users',require('./users'))
router.use('/userdata',require('./usersData'))

module.exports=router;