/**
 * 文章列表model comment
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CommentSchema=new Schema({
    title:String,
    summary:String,
    author:String,
    date:String,
    content:String,
    review:String
});

mongoose.model('Comment',CommentSchema);