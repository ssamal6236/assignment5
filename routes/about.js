var express = require('express');
var router = express.Router();


router.get("/about",(req,res,next)=>{
    res.render('about', { title: 'Vikram </about>' });
})
module.exports = router;
