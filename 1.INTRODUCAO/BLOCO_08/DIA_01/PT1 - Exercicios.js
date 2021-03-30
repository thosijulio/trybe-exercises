const newEmployees = (createUser) => {
  const employees = {
    id1: createUser('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: createUser('Pedro Guerra Santos'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: createUser('Pedro Guerra Correa Leite'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

const createUser = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  return {
    fullName: nome,
    email: `${email}@trybe.com`,
  }
}
console.log(newEmployees(createUser));