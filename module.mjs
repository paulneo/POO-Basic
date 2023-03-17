import { PlatziClass } from './main2.mjs';

const clase67 = new PlatziClass({
  name: 'JavaScript: orientado a objetos, basado en prototipos',
  videoID: 'wertyuio;p87htreghtyuioouyjtrh',
});

clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
    // Tu código aquí 👈
  }

  set name(nuevoNombrecito) {
    console.log(nuevoNombrecito);
    if (typeof nuevoNombrecito === 'string' && nuevoNombrecito) {
      let array = nuevoNombrecito.split(' ');
      this._name = array
        .map((el) => `${el.at(0).toUpperCase()}${el.slice(1, el.length)}`)
        .join(' ');
    }
    // Tu código aquí 👈
  }
}

const platzi = new Course({
  name: 'curossss d progrmacio basica',
  classes: [],
});

console.log(platzi.name);

platzi.name = [undefined];

console.log(platzi.name);
