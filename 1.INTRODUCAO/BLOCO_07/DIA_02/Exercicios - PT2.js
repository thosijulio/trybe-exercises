const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const exercicio1 = (object, key, value) => object[key] = value;
exercicio1(lesson2, 'turno', 'manhã');

const exercicio2 = (object) => Object.keys(object);
console.log(exercicio2(lesson1));

const exercicio3 = (object) => (Object.keys(object)).length;
console.log(exercicio3(lesson3));

const exercicio4 = (object) => Object.values(object);
console.log(exercicio4(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const exercicio6 = (objectExercicio5) => {
  let contador = 0;
  for (let index in objectExercicio5) {
    contador += objectExercicio5[index].numeroEstudantes;
  }
  return contador;
}
console.log(exercicio6(allLessons));

const exercicio7 = (object, position) => {
  const keysObject = Object.keys(object);
  return object[keysObject[position]];
}
console.log(exercicio7(lesson1,0));

const exercicio8 = (object, key, value) => {
  if(object && object[key] && object[key] === value) {
    return true;
  }
  return false;
}
console.log(exercicio8(lesson3, 'materia', 'Maria Clara'));
