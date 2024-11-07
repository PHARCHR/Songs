const mongoose = require("mongoose");
const songsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a song name"],
    },
    artistName: {
      type: String,
      required: [true, "Please enter a song name"],
    },
    songArt: {
      type: String,
      required: [true, "Please enter URL to album art"],
    },
    duration: {
      type: Number,
      required: [true, "Please enter the duration of the song"],
    },
    year: {
      type: Number,
      required: [true, "Please enter the year the album got released"],
    },
    album: {
      type: String,
      required: [true, "Please enter the name of the album"],
    },
    genre: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: [true, "Please add description about the song"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Song", songsSchema);
