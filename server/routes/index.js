/**
 * 控制路由
 */
var express = require('express');
var router = express.Router();

var  CommentService=require('../service/CommentService');
var  ReviewService=require( '../service/ReviewService');
var  UserService=require('../service/UserService');

router.post('/comment/getSiders',CommentService.getSliders);
router.post('/comment/getAllComment',CommentService.getAllComments);
router.post('/comment/getCommentDetail',CommentService.getCommentDetail);
router.post('/comment/postBlog',CommentService.addComment);
router.post('/comment/updateComment',CommentService.updateComment);
router.post('/comment/deleteComment',CommentService.deleteComment);

router.post('/review/addReview',ReviewService.addReview);
router.post('/review/getReviewsById',ReviewService.getReviewsById);

router.post('/user/login',UserService.findUser);
router.post('/user/getAllUsers',UserService.findAllUser);
router.post('/user/getUserDetail',UserService.findUserById);
router.post('/user/updateUser',UserService.updateUser);
router.post('/user/deleteUser',UserService.deleteUser);

module.exports = router;
