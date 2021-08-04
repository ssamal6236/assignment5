var express = require('express');
var router = express.Router();


router.get("/connect",(req,res,next)=>{
    res.render('connect', { title: 'Sovan </connect>' });
})
module.exports = router;
