/**
 * 评论列表model review
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ReviewSchema=new Schema({
    content:String,
    date:String,
    comment:{type:Schema.type.ObjectId,ref:'Comment'}
});

mongoose.model('Review',ReviewSchema);