var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var showSchema = new Schema({
  showName: String,
  summary: String,
  runtime: Number,
  status: String,
  url: String,
  premiered: String,
  image: String,
  episodesWatched: Number,
  totalEpisodes: Number,
  tvMazeId: Number,
  network: String,
  caughtUp: Boolean
});

var Show = mongoose.model('Show', showSchema);

var exportObj = {};

exportObj.model = Show;
exportObj.schema = showSchema;

module.exports = exportObj;
