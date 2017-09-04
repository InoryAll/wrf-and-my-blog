/**
 * 文章列表dao commentdao
 */
var model=require('../model/index');
var Comment=model.Comment;

exports.findAll=function (callback) {
    Comment.find(callback);
};

