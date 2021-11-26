const verifyCep = (req, res, next) => {
  const { cep } = req.params;
  if(!cep || !/\d{5}-?\d{3}/.test(cep)) {
    return next({ "error": { "code": "invalidData", "message": "CEP inválido" }, code: 400 });
  }
  next();
}

module.exports = verifyCep;