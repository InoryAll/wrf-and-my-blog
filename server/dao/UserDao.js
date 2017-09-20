/**
 * 用户dao userdao
 */
var model=require('../model/index');
var User=model.User;

exports.find=function (user,callback) {
  User.find({username:user.username,password:user.password},callback);
};