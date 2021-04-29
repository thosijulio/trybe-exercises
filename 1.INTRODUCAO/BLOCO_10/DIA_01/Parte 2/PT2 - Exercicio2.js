function techList(arrTech, name) {
  if (!(arrTech.length > 0)) return 'Vazio!';

  const technologies = arrTech
  .sort()
  .map((tech) => ({
    tech, 
    name,
  }));
  return technologies;
}

module.exports = techList;
