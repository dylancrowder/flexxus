/*

*Consigna:
1. Crear un algoritmo que muestre los números impares entre 0 y 100.

*Lógica aplicada para la resolución:
   - Se declara una variable `impares` que es un array vacío.
   - Se utiliza un bucle `for` que inicia en 0 y termina en 100.
   - Dentro del bucle, se aplica una condición que verifica si el número es impar usando el operador módulo.
   - Los números impares se almacenan en el array `impares` y se muestra un mensaje en la consola con los resultados.

*Cómo ejecutar el código:
  Dentro de la carpeta `item-1`, ejecutar el comando:
   - node item-1.js

*Detalles:
  -Podria haber impreso directamente los numeros impares dentro de la condicional
   pero decidi agregarlos a un array para que tenga persistencia en memoria y poder mostrar todos los numeros juntos 
   
*/

let impares = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    impares.push(i);
  }
}

console.log("Estos son los números impares del 0 al 100:", impares);
