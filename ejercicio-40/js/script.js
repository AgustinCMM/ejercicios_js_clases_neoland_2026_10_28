// Escribe aquí la solución del ejercicio 40.
import { BandaMusical, Guitarrista, Baterista, Cantante } from "./clases.js";

const miBanda = new BandaMusical([]);

miBanda.agregarMusico(new Guitarrista());
miBanda.agregarMusico(new Baterista());
miBanda.agregarMusico(new Cantante());

miBanda.darConcierto();