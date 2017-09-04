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



