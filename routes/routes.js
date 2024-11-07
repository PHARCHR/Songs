const express = require("express");
const {
  getAllSongs,
  getSongById,
  createSong,
  updateSongBYId,
  deleteSongById,
} = require("../controllers/controllers");
const router = express.Router();

router.get("/", getAllSongs);
router.get("/:id", getSongById);
router.post("/", createSong);
router.patch("/:id", updateSongBYId);
router.delete("/:id", deleteSongById);
module.exports = router;
