/**
 * 留言service boardservice
 */
var BoardDao = require('../dao/BoardDao');

exports.addBoard = function (req, res, next) {
  var board = req.body;
  BoardDao.add(board,function (err,message) {
    if (!err) {
      message = {code: '1', message: '留言成功!'};
    } else {
      console.log(err.message);
      message = {code: '0', message: '留言失败!'};
    }
    res.json(message);
  });
};