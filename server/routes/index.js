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

router.post('/review/addReview',ReviewService.addReview);
router.post('/review/getReviewsById',ReviewService.getReviewsById);

router.post('/user/login',UserService.findUser);

module.exports = router;
