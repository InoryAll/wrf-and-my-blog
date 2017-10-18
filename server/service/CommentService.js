/**
 * 文章列表service commentservice
 */
var CommentDao=require('../dao/CommentDao');

// 获取所有的文章列表
exports.getAllComments=function (req,res,next) {
    console.log('getAllComments');
    CommentDao.findAll(function (err,comments) {
        if(!err){
            res.json(comments);
        }
        else{
            console.log(err.message);
        }
    });
};

//获取侧边栏数据
exports.getSliders=function (req,res,next) {
    console.log('getSiders');
    CommentDao.findGenaral(function (err,comments) {
        if(!err){
            res.json(comments);
        }
        else{
            console.log(err.message);
        }
    });
};

// 获取文章详细信息
exports.getCommentDetail=function (req,res,next) {
    console.log('getCommentDetail');
    var id=req.body.id;
    CommentDao.findById(id,function (err,comment) {
        if (!err){
            res.json(comment);
        }
        else{
            console.log(err.message);
        }
    });
};

// 发布文章
exports.addComment=function (req,res,next) {
  console.log('addComment');
  var comment=req.body;
  CommentDao.add(comment,function (err,message) {
    if (!err) {
      message = {code: '1', message: '发表成功!'};
    }
    else{
      console.log(err.message);
      message={code:'0',message:'发表失败!'};
    }
    return res.json(message);
  })
};

// 更新文章信息
exports.updateComment=function (req,res,next) {
  console.log('updateComment');
  var comment=req.body;
  CommentDao.update(comment,function (err,message) {
    if (!err) {
      message = {code: '1', message: '修改成功!'};
    }
    else{
      console.log(err.message);
      message = {code:'0', message:'修改失败!'};
    }
    return res.json(message);
  });
};


