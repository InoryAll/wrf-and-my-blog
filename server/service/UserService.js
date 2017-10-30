/**
 * 用户service userservice
 */
var UserDao=require('../dao/UserDao');

exports.addUser=function (req,res,next) {
  var user = req.body;
  UserDao.add(user,function (err,message) {
    if (!err) {
      message = {code: '1', message: '添加用户成功!'};
    }
    else {
      console.log(err,message);
      message = {code: '0', message: '添加用户失败!'};
    }
    res.json(message);
  })
};

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

exports.findUserByName=function (req,res,next) {
  var username=req.body.username;
  UserDao.findByName(username,function (err,user) {
    if (!err) {
      var message;
      if (user.length === 0) {
        message = { code: '1', message: '用户名可以使用!'};
      } else {
        message = { code: '0', message: '用户名已存在!'};
      }
      res.json(message);
    }
    else {
      console.log(err.message);
    }
  })
};

exports.findAllUser=function (req,res,next) {
  UserDao.findAll(function (err,users) {
    if (!err) {
      res.json(users);
    }
    else {
      console.log(err.message);
    }
  });
};

exports.updateUser=function (req,res,next) {
  var user = req.body;
  UserDao.update(user,function (err,message) {
    if (!err) {
      message = {code: 1, message: '修改成功!'};
    }
    else {
      console.log(err.message);
      message = {code: 0, message: '修改失败!'};
    }
    res.json(message);
  });
};

exports.deleteUser=function (req,res,next) {
  var id = req.body.id;
  UserDao.delete(id,function (err,message) {
    if (!err) {
      message = {code: 1, message: '删除成功!'};
    }
    else {
      console.log(err.message);
      message = {code: 0, message: '删除失败!'};
    }
    res.json(message);
  });
};