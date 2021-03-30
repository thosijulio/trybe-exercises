/* Crie uma função que reotorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (strength) => Math.floor(Math.random() * (strength - 15 + 1) + 15);
const warriorDamage = (strength, weaponDmg) => Math.floor(Math.random() * ((strength * weaponDmg) - strength + 1) + strength);