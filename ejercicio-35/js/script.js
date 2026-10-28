// Escribe aquí la solución del ejercicio 35.
import { Gerrero, Mago } from "./clases.js";

const luchadores = [
    new Gerrero,
    new Mago,
    new Gerrero,
    new Gerrero,
    new Mago
];
let ataques = [];

luchadores.forEach(element => {
    ataques.push(element.atacar());
});

console.log(ataques);