/**
 * 用户dao userdao
 */
var model=require('../model/index');
var User=model.User;

exports.find=function (user,callback) {
  User.find({username:user.username,password:user.password},callback);
};

exports.findById=function (id,callback) {
  User.find({_id: id},callback);
};

exports.findAll=function (callback) {
  User.find(callback);
};

exports.update=function (object,callback) {
  var user = {
    username: object.username,
    password: object.password,
  };
  User.update({_id: object._id},user,callback);
};