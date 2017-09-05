/**
 * 数据库连接,模型导出,数据初始化
 */
var mongoose=require('mongoose');
var config=require('../config');

// 兼容Promise
mongoose.Promise=global.Promise;
// 数据库连接
mongoose.connect(config.address,{
    useMongoClient:true
});

var connection=mongoose.connection;
connection.on('open',function () {
   /* createData();*/

    console.log('connected to '+config.address);
});
connection.on('error',function (err) {
    if (err){
        console.error('connect to %s error',config.address);
        process.exit(1);
    }
});

// 导出model
require('./Comment');
require('./Review');

exports.Comment=mongoose.model('Comment');
exports.Review=mongoose.model('Review');

function createData() {
    var Comment=require('./index').Comment;
    var Review=require('./index').Review;
    var ObjectId=mongoose.Types.ObjectId;

    var commentIds=[new ObjectId,new ObjectId,new ObjectId,new ObjectId,new ObjectId,new ObjectId];
    var reviewIds=[new ObjectId,new ObjectId,new ObjectId];

    var comments=[];
    var reviews=[];


    /*reviews.push({_id:reviewIds[0],content:'你好，这是我的第一条评论哦.',date:'2017-9-4',comment:''});
    reviews.push({_id:reviewIds[1],content:'你好，这是我的第二条评论哦.',date:'2017-9-4',comment:''});*/
    comments.push({_id:commentIds[0],title:'这是我的第一篇文章',summary:'这是划时代意义的第一篇文章',author:'trj',date:'2017-9-4',content:'大家好啊，这是我的第一篇化时代意义的文章，有问题大家尽管来问我~',review:''});

    Review.create(reviews, function(err, docs) {
        Comment.create(comments, function(err, docs) {
        });
    });

}

