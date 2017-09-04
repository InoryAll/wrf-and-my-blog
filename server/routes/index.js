/**
 * 控制路由
 */
var express = require('express');
var router = express.Router();

var  CommentService=require('../service/CommentService');
var  ReviewService=require( '../service/ReviewService');

router.post('/comment/getSiders',CommentService.getSliders);
router.post('/comment/getAllComment',CommentService.getAllComments);
router.post('/review/addReview',ReviewService.addReview);

module.exports = router;
