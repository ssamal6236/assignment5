var express = require('express');
var router = express.Router();


router.get("/contact",(req,res,next)=>{
    res.render('contact', { title: 'Vikram </contact>' });
})
module.exports = router;
