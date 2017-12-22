/**
 * 控制路由
 */
var express = require('express');
var router = express.Router();

var  CommentService=require('../service/CommentService');
var  ReviewService=require( '../service/ReviewService');
var  UserService=require('../service/UserService');
var  BoardService=require('../service/BoardService');

/*文章操作*/
router.post('/comment/getSiders',CommentService.getSliders);
router.post('/comment/getAllComment',CommentService.getAllComments);
router.post('/comment/getCommentDetail',CommentService.getCommentDetail);
router.post('/comment/postBlog',CommentService.addComment);
router.post('/comment/updateComment',CommentService.updateComment);
router.post('/comment/deleteComment',CommentService.deleteComment);

/*评论操作*/
router.post('/review/addReview',ReviewService.addReview);
router.post('/review/getReviewsById',ReviewService.getReviewsById);

/*用户操作*/
router.post('/user/login',UserService.findUser);
router.post('/user/getAllUsers',UserService.findAllUser);
router.post('/user/getUserDetail',UserService.findUserByName);
router.post('/user/updateUser',UserService.updateUser);
router.post('/user/deleteUser',UserService.deleteUser);
router.post('/user/addUser',UserService.addUser);

/*留言板操作*/
router.post('/board/addBoard',BoardService.addBoard);
router.post('/board/getAllBoards',BoardService.getAllBoards);

module.exports = router;
