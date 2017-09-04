/**
 * 评论列表dao reviewdao
 */
var  model=require('../model/index');
var  Review=model.Review;

exports.add=function (object,callback) {
    var review=new Review({
        ...object
    });
    review.save(callback);
};


