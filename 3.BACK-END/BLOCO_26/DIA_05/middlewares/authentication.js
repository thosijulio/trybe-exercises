const { test } = require("media-typer");

const passwordAuth = (req, res, next) => {
  const { password } = req.body;
  
  if (isNaN(password) || password.length < 4 || password.length > 8) {
    return next({ message: 'invalid data' });
  }

  return next();
};

const usernameAuth = (req, res, next) => {
  const { username } = req.body;
  if (!username || username.length <= 3) return next({ message: 'invalid data' });
  return next();
};

const emailAuth = (req, res, next) => {
  const { email } = req.body;
  if (/\S+@\S+\.\S+/.test(email)) return next();
  return next({ message: 'invalid data' });
};

module.exports = {
  passwordAuth,
  usernameAuth,
  emailAuth,
};
