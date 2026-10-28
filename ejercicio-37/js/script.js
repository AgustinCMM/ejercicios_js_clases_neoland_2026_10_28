// Escribe aquí la solución del ejercicio 37.
import { Fabrica } from "./clases.js";

const miFabrica = new Fabrica("Fábrica de robots");
const miRobot = miFabrica.crearRobot("Robo-tito");

console.log(miRobot.nombrarFabrica(miFabrica.nombre));