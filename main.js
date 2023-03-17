const natalia = {
  name: 'Jean Paul',
  age: 22,
  cursosAprobados: [
    'Curso definitivo de HTML y CSS',
    'Curso práctico de HTML y CSS',
  ],
  aprobarCurso(nuevo_curso) {
    this.cursosAprobados.push(nuevo_curso);
  },
};

// Hacer que Natalia apruebe otro curso

natalia.aprobarCurso('Curso basico de JS');

console.log(natalia);

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevo_curso) {
  this.cursosAprobados.push(nuevo_curso);
};

const juanita = new Student('Juanita', 21, [
  'Curso definitivo de HTML y CSS',
  'Curso práctico de HTML y CSS',
]);

class Student2 {
  constructor({ name, age, cursosAprobados = [], email }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.email = email;
  }

  aprobarCurso(nuevo_curso) {
    this.cursosAprobados.push(nuevo_curso);
  }
}

// const miguelito = new Student2('Miguel', 23, [
//   'Curso Analisis de negocios para ciencia de datos',
//   'Curso de Big Data',
// ]);

const juan = new Student2({
  name: 'Juan',
  age: 21,
});

juan.aprobarCurso('Curso de lenguaje de programacion');

juan.email = 'maial';
