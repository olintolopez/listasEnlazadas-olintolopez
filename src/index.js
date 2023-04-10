const listaEnlazada = require('./linked-list');

describe('Lista Enlazada Simple - Pruebas', function() {
  describe('Agregando nodos', function() {
    it('Debe de agregar el primer elemento', () => {
      listaEnlazada.agregarAlFinal(10);
      expect(listaEnlazada.raiz.valor).to.equal(10);
    });

    it('Debe de agregar 3 elementos más', () => {
      listaEnlazada.agregarAlFinal(3);
      listaEnlazada.agregarAlFinal(2);
      listaEnlazada.agregarAlFinal(1);
      expect(listaEnlazada.valorDe(0)).to.equal(10);
      expect(listaEnlazada.valorDe(1)).to.equal(3);
      expect(listaEnlazada.valorDe(2)).to.equal(2);
      expect(listaEnlazada.valorDe(3)).to.equal(1);
      expect(listaEnlazada.numNodos).to.equal(4);
    });

    it('Debe de agregar un elemento después de indice', () => {
      listaEnlazada.agregarDespuesDe(1, 5);
      expect(listaEnlazada.numNodos).to.equal(5);
    });
  });

  describe('Econtrar por indice', function() {
    it('Deberia de encontrar el valor de la raiz', () => {
      let valor = listaEnlazada.valorDe(0);
      expect(valor).to.equal(10);
    });

    it('Deberia de regresar null si indice es mayor que numNodos', () => {
      let valor = listaEnlazada.valorDe(7);
      expect(valor).to.equal(null);
    });

    it('Deberia de regresar valor para indice 3', () => {
      expect(listaEnlazada.valorDe(3)).to.equal(2);
    });
  });

  describe('Borrar con índice', function() {
    it('Deberia de borrar la raiz', () => {
      listaEnlazada.borrarIndice(0);
      expect(listaEnlazada.raiz.valor).to.equal(3);
      expect(listaEnlazada.numNodos).to.equal(4);
    });

    it('Debe de borrar nodo en indice', () => {
      listaEnlazada.borrarIndice(2);
      expect(listaEnlazada.valorDe(2)).to.equal(2);
      expect(listaEnlazada.numNodos).to.equal(3);
    });
  });

  describe('Contiene', function() {
    before(function() {
      listaEnlazada.agregarAlFinal(20);
      listaEnlazada.agregarAlFinal(73);
      listaEnlazada.agregarAlFinal(100);
    });

    it('Debe de verificar que la lista contiene los valores', () => {
      expect(listaEnlazada.contiene(20)).to.true;
      expect(listaEnlazada.contiene(100)).to.true;
      expect(listaEnlazada.contiene(101)).to.false;
      expect(listaEnlazada.contiene(2)).to.true;
      expect(listaEnlazada.contiene(3)).to.true;
      expect(listaEnlazada.contiene(10)).to.false;
    });
  });

  describe('Imprimir', function() {
    it('Debe imprimir los valores separados por una "," ', () => {
      expect(listaEnlazada.imprimir()).to.equal('3,5,2,20,73,100');
    });
  });
});

mocha.run();
