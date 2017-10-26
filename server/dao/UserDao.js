/**
 * 用户dao userdao
 */
var model=require('../model/index');
var User=model.User;

exports.find=function (user,callback) {
  User.find({username:user.username,password:user.password},callback);
};

exports.findByName=function (username,callback) {
  User.find({username: username},callback);
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

exports.delete=function (id,callback) {
  User.remove({_id: id}, callback);
};