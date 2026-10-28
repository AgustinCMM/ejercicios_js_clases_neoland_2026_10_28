// Escribe aquí la solución del ejercicio 36.
import { Dispositivo, Computadora, Laptop } from "./clases.js";

const miDispositivo = new Dispositivo(200);
const miComputadora = new Computadora(miDispositivo.energia);
const miLaptop = new Laptop;

console.log(`La energía que recibe Dispositivo es: ${miDispositivo.energia}`);
console.log(`La energía que tiene Computadora es: ${miComputadora.consumir()}`);
console.log(`La energía que tiene Laptop es: ${miLaptop.consumir()}`);