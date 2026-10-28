// Escribe aquí la solución del ejercicio 31.
import { CuentaBancaria } from "./clases.js";

const miCuenta = new CuentaBancaria("Agustín", 100);

console.log(`Cantidad inicial antes del depósito: €${miCuenta.saldo}`);

miCuenta.depositar(150);

console.log(`Cantidad total después del depósito: €${miCuenta.saldo}`);