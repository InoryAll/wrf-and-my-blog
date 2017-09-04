/**
 * 评论列表service reviewservice
 */
var ReviewDao=require('../dao/ReviewDao');

exports.addReview=function (req,res,next) {
    var review=req.body;
    ReviewDao.add(review,function (err,message) {
        if (!err) {
            message = {code: '1', message: '评论成功!'};
        }
        else{
            console.log(err.message);
            message={code:'0',message:'评论失败!'};
        }
        return res.json(message);
    });
};