/* Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0. */

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
const mageTurn = (intelligence, mana) => {
  const turnResult = {};
  if(mana < 15) {
    turnResult.dano = 0;
    turnResult.mana = mana;
    return turnResult;
  }
  const turnResult = {
    dano: Math.floor(Math.random() * ((intelligence * 2) - intelligence + 1) + intelligence),
    mana: 15,
  }
  return turnResult;
}