/**
 * 用户service userservice
 */
var UserDao=require('../dao/UserDao');

exports.findUser=function (req,res,next) {
  var user=req.body;
  UserDao.find(user,function (err,admin) {
    if(!err){
      res.json(admin);
    }
    else{
      console.log(err.message);
    }
  });
};