const errorHandler = (err, res, req, next) => {
  res.send("SOMETHING WENT WRONG");
};
module.exports = errorHandler;
