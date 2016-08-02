var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var showSchema = new Schema({
  showName: String

})

var Show = mongoose.model('Show', showSchema);

module.exports = Show;
