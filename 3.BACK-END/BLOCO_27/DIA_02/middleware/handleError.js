const handleError = (err, _req, res, _next) => {
  console.log(err);
  return res.status(err.code).json({ error: err.error });
}

module.exports = handleError;
