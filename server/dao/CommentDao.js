/**
 * 文章列表dao commentdao
 */
var model=require('../model/index');
var Comment=model.Comment;

exports.findAll=function (callback) {
    Comment.find(callback);
};

exports.findGenaral=function (callback) {
    Comment.find({},{_id:1,title:1,author:1},callback)
};

