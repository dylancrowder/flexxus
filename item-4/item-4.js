/*

* Consigna:
4. JavaScript ES6: Dados los siguientes arrays, 
   imprimir por consola los elementos del array “y” que no se encuentran en el array “x” utilizando una única línea de código.
   const x = ["n", "bro", "c", "|"]; 
   const y = ["d", "n", "l", "bro", "g"];

* Lógica aplicada para la resolución:
   - Se declaran los arrays `x` e `y`.
   - Se utiliza el método nativo `filter` de JavaScript, que se introdujo en la versión ES5, junto con una función de callback.
   - Dentro del callback, se usa el método `includes`, que se introdujo en la versión ES6, para verificar si los elementos de `y` están presentes en `x`.
   - Se filtran los valores que no están incluidos en el array `x` utilizando el operador de negación `!`.
   - Los elementos filtrados se almacenan en un nuevo array que no modifica ni el array `x` ni el array `y`.

* Cómo ejecutar el código:
   Dentro de la carpeta del archivo "item-4.js", ejecutar el comando:
   - "node item-4.js"

* Detalles adicionales:
   - Revise la documentacion de W3Schools para saber sobre los métodos disponibles en la versión ES6 de JavaScript.

*/

const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];

console.log(y.filter((element) => !x.includes(element)));
