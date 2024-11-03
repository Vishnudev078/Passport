var express = require('express');
var router = express.Router();
var adminHelper = require('../help/adminHelper')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/login',(req,res,next)=>{
var username=req.body.username;
var password=req.body.password;
adminHelper.checkLogin(username,password).then((result)=>{
  if(result===true)
  {
    res.render('./index');
  }else{
    res.redirect('./');
  }
}).catch((err)=>{
  console.log(err);
  res.redirect('./');
})
});


module.exports = router;
