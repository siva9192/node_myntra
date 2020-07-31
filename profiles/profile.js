//ROUTER LEVEL MIDDLEWARE


const express = require('express');
const router = express.Router();


//@http method Get
//@description its profile get information
//@access public
router.get('/',(req, res)=>{
    res.send("i am profile router");
});

module.exports = router;