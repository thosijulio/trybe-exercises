module.exports = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if(!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      error: true,
      message: 'Favor informar nome, sobrenome, senha e email.'
    });
  };
  if(password.length < 6) {
    return res.status(400).json({
      error: true,
      message: 'Senha deve conter pelo menos seis dígitos.',
    });
  };
  next();
};
