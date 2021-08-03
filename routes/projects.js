var express = require('express');
var router = express.Router();

router.get("/project",(req,res,next)=>{
    res.render('projects', { title: 'Vikram</projects>' });
})
module.exports = router;
