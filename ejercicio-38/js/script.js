// Escribe aquí la solución del ejercicio 38.
import { Jugador, Monstruo } from "./clases.js";

const miJugador = new Jugador("Player", 100);
const miMonstruo = new Monstruo("Monster", 20);

console.log(`La vida de ${miJugador.nombre} es ${miJugador.recibirGolpe(miMonstruo.danio)} después de recibir un golpe de ${miMonstruo.nombre}`);