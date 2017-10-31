/**
 * 留言dao boarddao
 */
var model = require('../model/index');
var Board = model.Board;

exports.add = function (object, callback) {
  var board = new Board({
    author: object.author,
    date: object.date,
    content: object.content,
  });
  board.save(callback);
};

