/**
 * 留言板model board
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoradSchema = new Schema({
  date: String,
  content: String,
});

mongoose.model('Board',BoradSchema);
