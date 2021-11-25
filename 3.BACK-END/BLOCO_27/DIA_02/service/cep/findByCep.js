const model = require('../../model/index');

const findById = async (cep) => {
  const [result] = await model.cep.findByCep(cep);

  if(!result) {
    return {
      status: 404,
      message: {
        error: {
          code: 'notFound', 
          message: 'CEP não encontrado'
        },
      },
    };
  };
  return {
    status: 200,
    message: result,
  }
}

module.exports = findById;
