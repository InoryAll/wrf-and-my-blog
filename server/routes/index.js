/**
 * 控制路由
 */
var express = require('express');
var router = express.Router();

import CommentService from '../service/CommentService';
import ReviewService from '../service/ReviewService';

router.get('/comment/getAllComment',CommentService.getAllComments);
router.get('/review/addReview',ReviewService.addReview);

module.exports = router;
