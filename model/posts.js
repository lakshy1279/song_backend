const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  movieName: {
    type: String,
    require: true,
  },
  releaseDate: {
    type: String,
    require: true,
  },
  thumbnail: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    require: true,
  },
  video: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Song", songSchema);
