// Escribe aquí la solución del ejercicio 33.
import { Gerrero, Mago, Batalla } from "./clases.js";

const miGerrero = new Gerrero;
const miMago = new Mago;
const miBatalla = new Batalla;

console.log(miBatalla.iniciarPelea(miGerrero.atacar(), miMago.atacar()));