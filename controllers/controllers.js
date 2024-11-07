const Song=require("../models/songs")
const{StatusCodes}=require('http-status-codes')
const getAllSongs = async (req, res) => {

  const song= await Song.find()
  res.status(StatusCodes.OK).json(song)
};
const getSongById = async (req, res) => {
  const{id}=req.params
  const song=await Song.findById({_id:id})
  res.status(StatusCodes.OK).json(song)
};
const createSong = async (req, res) => {
  
  const song=await Song.create(req.body)
  res.status(StatusCodes.CREATED).json(song)
};
const updateSongBYId = async (req, res) => {
  const song=await Song.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})
  res.status(StatusCodes.OK).json(song)
};
const deleteSongById = async (req, res) => {
    const song=await Song.deleteOne({_id:id})
    res.status(StatusCodes.OK).json({msg:"SONG SUCCESSFULLY DELETED"})
};
module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  updateSongBYId,
  deleteSongById,
};
