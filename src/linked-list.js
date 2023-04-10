/**
 * El nodo es un objeto con el siguiente esquema
 * nodo: { valor: null, siguiente: null }
 *
 * Antes de cada función veras las instrucciones de lo
 * que debería de hacer
 *
 * Cuando hagas cambios en ester archivo vas a ver
 * las pruebas que has completado
 *
 * */

/**
 * Agregar al final de nuestra lista un nuevo
 * nodo con el valor pasado como parametro
 *
 * Si no hay un nodo en nuestra lista, crear el
 * nodo raiz y ponerle asignarle el valor
 *
 * Para crear un nodo puedes usar la funcion crearNodo
 *
 * */

function crearNodo(valor) {
  return { valor, siguiente: null };
}

const listaEnlazada = {
  // Primer nodo de nuestra lista
  raiz: null,
  // Cantidad de nodos que tenemos
  numNodos: 0,

  /**
   * Agregar al final de nuestra lista un nuevo
   * nodo con el valor pasado como parametro
   *
   * Si no hay un nodo en nuestra lista, crear el
   * nodo raiz y ponerle asignarle el valor
   *
   * Para crear un nodo puedes usar la funcion crearNodo
   *
   * */
  agregarAlFinal(valor) {
    // Si el valor del nodo raiz es nulo, se crea este nodo
    if(!this.raiz) this.raiz = crearNodo(valor)
    else{
        let actual = this.raiz;
        while (actual.siguiente) {
            actual = actual.siguiente;
        }
        actual.siguiente = crearNodo(valor);
    }
    
    this.numNodos++;
  },
  agregarDespuesDe(indice, valor) {
    //  Si indice esta fuera del rango. no se hace nada
    if (indice < 0 || indice > this.numNodos) return null;
  
    // Si el indice es cero, se crea el nodo raiz
    if (indice === 0) {
        this.raiz = crearNodo(valor);
        this.numNodos++;
        return;
      }
      // Si el indice es mayor que cero, se crea el nodo a insertar 
      const nodo = crearNodo(valor);
      //Se crean las variables para los nodos: actual y anterior
      let actual, anterior;
  
      // El nodo actual se inicializa en el nodo raiz
      actual = this.raiz;

      //Se crea la variable auxiliar contador
      let contador = 0;
  
      while (contador <= indice) {
        anterior = actual; // Se actualiza el nodo anterior 
        //console.log("Nodo actual ", contador, " ==> ",actual);
        contador++;
        actual = actual.siguiente; // Se actualiza el enlace del nodo actual 
      }
      // El enlace del nodo que se va a agregar apunta hacia el nodo actual 
      nodo.siguiente = actual;  
      // El enlace del nodo anterior apunta hacia el nodo que se esta agregando
      anterior.siguiente = nodo;
      //Se aumenta el numero de nodos
      this.numNodos++;
  },
  borrarIndice(indice) {
    //  Si indice esta fuera del rango. no se hace nada
    if (indice < 0 || indice > this.size) return null;
  
    //Se crea la variable actual, y se inicializa en el nodo raiz
    let actual = this.raiz;
    
    //Se crea la variable para el nodo anterior
    let anterior;

    //Se crea la variable auxiliar contador
    let contador = 0;
  
    // Si indice es igual a cero elimina el primero
    if (indice === 0) {
        this.raiz = actual.siguiente;
    } else {
        while (contador <= indice) {
          contador++;
          anterior = actual;
          actual = actual.siguiente;
        }
       //El enlace de nodo anterior apunta al nodo que viene despues del nodo actual
        anterior.siguiente = actual.siguiente;
      }
      //Se disminuye el numero de nodos
      this.numNodos--;
  },
  contiene(valor) {
    let actual = this.raiz;
    while (actual) {
      if (actual.valor === valor) {
        return true;
      }
      //console.log("actual tiene el valor de", actual.valor);
      actual = actual.siguiente;
      
    }
    return false;
  },
  valorDe(indice) {
    //  Si indice esta fuera del rango. no se hace nada
    if (indice < 0 || indice > this.size) return null;
    
    // Ae crea el nodo actual y se inicializa em el nodo raiz
    let actual = this.raiz;

    //Se crea la varianle auxiliar contador
    let contador = 0;

    while (actual) {
      if (contador == indice) {
        return actual.valor;
      }
      contador++;
      actual = actual.siguiente;
    }

    return null;
  },
  imprimir() {
    let actual = this.raiz;
    let cadena = `${actual.valor}`;
    let contador = 0;
    while (actual) {

        if(contador > 0) cadena = `${cadena},${actual.valor}`;      
        actual = actual.siguiente;
        contador++;    
    }
    return cadena;
  
  }
};

module.exports = listaEnlazada;
