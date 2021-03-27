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