/**
 * 数据库连接,模型导出,数据初始化
 */
var mongoose=require('mongoose');
var config=require('../config');

// 兼容Promise
mongoose.Promise=global.Promise;
// 数据库连接
mongoose.connect(config.address,{
    useMongoClient:true
});

var connection=mongoose.connection;
connection.on('open',function () {
    console.log('connected to '+config.address);
});
connection.on('error',function (err) {
    if (err){
        console.error('connect to %s error',config.address);
        process.exit(1);
    }
});

// 导出model
require('./Comment');
require('./Review');

exports.Comment=mongoose.model('Comment');
exports.Review=mongoose.model('Review');



