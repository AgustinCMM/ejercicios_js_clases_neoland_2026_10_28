// Clases
export class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        this.saldo += cantidad;

        return this.saldo;
    }
}