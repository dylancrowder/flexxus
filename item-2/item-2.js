/*

*Consigna:
2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector.
   Realizar la creación y carga del vector en el constructor.
   Crear un método para imprimir el vector.

* Lógica aplicada para la resolución:
   - Se importa e instancia el módulo "readline" para interactuar con el usuario en la consola.

   - Se crea una clase "Item2" con un constructor que inicializa:
     - un array "sueldos" para almacenar los sueldos ingresados,
     - una variable "operarios" con la cantidad de operarios (5),
     - y una promesa "cargaCompleta" que se resuelve cuando se completan los ingresos de sueldos.

   - El método asíncrono "preguntarSueldo" retorna una promesa que se resuelve con un número positivo ingresado:
     - Dentro de este método, la función interna "pedirNumero" solicita un sueldo al usuario,
     - "pedirNumero" verifica si la entrada es un número positivo y, en caso de error, muestra un mensaje y vuelve a pedir el número.

   - El método "cargarSueldos" recorre un bucle "for" que llama a "preguntarSueldo" cinco veces (una por cada operario):
      - Cada sueldo se almacena en el array "sueldos".
      - Al finalizar el bucle, se cierra la consola con "rl.close()".

   - Se define el método "imprimir" para mostrar en consola el array "sueldos" con todos los sueldos ingresados.

   - Se instancia la clase "Item2" como "instancia1" y luego se llama al método "imprimir" utilizando "then(() => {})" para esperar a que se resuelva "cargaCompleta" antes de mostrar los sueldos.

* Cómo ejecutar el código:
   Dentro de la carpeta del archivo "item-2.js", ejecutar el comando:
   - "node item-2.js"

* Detalles adicionales:
 - La lógica se implementó utilizando la consola de Node para facilitar la ejecución del programa de manera directa.
   Dado que el código es asíncrono, se requiere esperar a que se completen todos los ingresos de sueldos antes de proceder a imprimirlos, lo cual añade un nivel de complejidad al codigo.
   
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Item2 {
  constructor() {
    this.sueldos = [];
    this.operarios = 5;
    this.cargaCompleta = this.cargarSueldos();
  }

  async cargarSueldos() {
    for (let index = 0; index < this.operarios; index++) {
      const sueldo = await this.preguntarSueldo(
        `Cargar sueldo del empleado numero ${index + 1}:  `
      );
      this.sueldos.push(Number(sueldo));
    }
    rl.close();
  }

  async preguntarSueldo(pregunta) {
    return new Promise((resolve) => {
      const pedirNumero = () => {
        rl.question(pregunta, (respuesta) => {
          const numero = Number(respuesta);
          if (!isNaN(numero) && numero > 0) {
            resolve(numero);
          } else {
            console.log("Ingrese un número válido");
            pedirNumero();
          }
        });
      };
      pedirNumero();
    });
  }

  imprimir() {
    console.log("Estos son los sueldos: ", this.sueldos);
  }
}

const instancia1 = new Item2();

/*Se espera a que se complete la carga de sueldos antes de ejecutar otros métodos.
 para que el array "sueldos" contenga todos los datos antes imprimirlos en la consola.*/
instancia1.cargaCompleta.then(() => {
  instancia1.imprimir();
});
