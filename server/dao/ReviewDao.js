/**
 * 评论列表dao reviewdao
 */
var  model=require('../model/index');
var  Review=model.Review;

exports.add=function (object,callback) {
    var review=new Review({
        content:object.content,
        date:object.date,
        comment:object.comment
    });
    review.save(callback);
};


