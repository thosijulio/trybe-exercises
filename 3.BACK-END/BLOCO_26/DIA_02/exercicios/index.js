const exercicio1 = require('./exercicio1');

const randomNumbers = Array.from({ length: 3 }).map(() => Math.floor(Math.random() * 100 + 1));

const exercicio2 = () => {
  exercicio1(...randomNumbers)
    .then((result) => console.log(`exercicio2: ${result}`))
    .catch((reject) => console.log(`exercicio2: ${reject}`));
};

const exercicio3 = async () => {
  try {
    const result = await exercicio1(...randomNumbers);
    console.log(`exercicio3: ${result}`);
  } catch (error) {
    console.log(`exercicio3: ${error}`);
  }
};

exercicio2();
exercicio3();
