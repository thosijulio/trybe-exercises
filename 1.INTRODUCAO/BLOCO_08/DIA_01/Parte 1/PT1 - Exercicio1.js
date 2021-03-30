const newEmployees = (createUser) => {
  const employees = {
    id1: createUser('Pedro Guerra'),
    id2: createUser('Pedro Guerra Santos'),
    id3: createUser('Pedro Guerra Correa Leite'),
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
