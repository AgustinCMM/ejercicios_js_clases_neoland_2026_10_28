// Escribe aquí la solución del ejercicio 39.
import { Jugador, Monstruo } from "./clases.js";

const monstruos = [
    new Monstruo("Monstruo lvl 1", 10),
    new Monstruo("Monstruo lvl 2", 20),
    new Monstruo("Monstruo lvl 3", 30),
    new Monstruo("Monstruo lvl 4", 40),
    new Monstruo("Monstruo lvl 5", 50)
]

const miJugador = new Jugador("Player 1", 200);

monstruos.forEach((_element, index)=> {
    let m = monstruos[index];
    console.log(`La vida de ${miJugador.nombre} es ${miJugador.recibirGolpe(m.danio)} después de recibir un golpe de ${m.nombre}`);
});