function techList(arrTech) {
  if (arrTech.length > 0) {
    const technologies = [];
    arrTech.sort();
    arrTech.forEach((tech) => {
      technologies.push({ tech, name: 'Julio H. Thosi' });
    });
    return technologies;
  }
  return 'Vazio!';
} 

console.log(techList(['teste', 'teste2']));

module.exports = techList;
