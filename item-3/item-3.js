/*

*Consigna:
3. Plantear una clase llamada Alumno y definir como atributos su nombre y su edad.
   En el constructor realizar el ingreso de datos.
   Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18) 

* Lógica aplicada para la resolución:
   - Se crea una clase Alumno con los atributos nombre y edad y un constructor que inicializa estos atributos.
     cada atrivuto contiene una ternaria para verificar si los datos son correctos, si son incorrectos les da un valor null

   - Se crean dos métodos: uno para mostrar el nombre del alumno y otro para mostrar su edad.
     los cuales tienen un operador de coalescencia nula "??" para mostrar un mensaje de error si el atributo es incorrecto
     
   - Se crea un método que verifica si el alumno es mayor de edad,
     Primero, el método revisa si nombre y edad son válidos; si alguno de ellos es incorrecto, muestra un mensaje de error y finaliza la ejecución del método.
     Si ambos atributos son correctos, utiliza un operador ternario para determinar si el alumno es mayor o menor de edad y muestra el resultado

   - Finalmente, se instancia la clase con ejemplos de alumnos para demostrar su funcionamiento.

* Cómo ejecutar el código:
   Dentro de la carpeta del archivo "item-3.js", ejecutar el comando:
   - "node item-3.js"

* Detalles adicionales:
   - Decidi asignar null a los valores incorrectos en lugar de lanzar errores para que el código sea más sencillo y permita que otras instancias de la clase se ejecuten sin interrumpirse.
*/

class Alumno {
  constructor(nombre, edad) {
    this.nombre = typeof nombre === "string" ? nombre : null;
    this.edad = typeof edad === "number" && !isNaN(edad) ? edad : null;
  }
  //metodos para mostrar nombre y edad
  mostrarNombre() {
    console.log(this.nombre ?? "Debes escribir un nombre correcto.");
  }

  mostrarEdad() {
    console.log(this.edad ?? "Debes escribir una edad correcta.");
  }

  //metodo para verificar edad
  edadLegal() {
    if (this.nombre === null || this.edad === null) {
      console.log(
        "Debes ingresar un nombre y una edad correctos para verificar."
      );
      return;
    }
    //Comprobar edad
    this.edad >= 18
      ? console.log(`${this.nombre} es mayor de edad`)
      : console.log(`${this.nombre} es menor de edad`);
  }
}

//Ejemplos
const alumno1 = new Alumno(33, "Jesus");
alumno1.mostrarNombre();
alumno1.mostrarEdad();
alumno1.edadLegal();

const alumno2 = new Alumno("Juan", 33);
alumno2.mostrarNombre();
alumno2.mostrarEdad();
alumno2.edadLegal();
