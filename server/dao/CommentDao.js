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

exports.findById=function (id,callback) {
  Comment.find({_id:id},callback);
};

exports.update=function (object,callback) {
  var comment=new Comment({
    title:object.title,
    summary:object.summary,
    author:object.author,
    date:object.date,
    content:object.content,
    review:''
  });
  Comment.update({_id: object._id},comment,callback);
};

exports.add=function (object,callback) {
  var comment=new Comment({
    title:object.title,
    summary:object.summary,
    author:object.author,
    date:object.date,
    content:object.content,
    review:''
  });
  comment.save(callback);
};

