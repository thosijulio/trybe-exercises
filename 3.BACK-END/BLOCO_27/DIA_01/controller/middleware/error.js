const error =  (err, _req, res, _next) => {
  res.status(500).send(err.message);
}

module.exports = error;
