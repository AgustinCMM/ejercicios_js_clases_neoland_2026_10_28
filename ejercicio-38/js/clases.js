// Clases
export class Jugador {
    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
    }
    recibirGolpe(enemigo) {
        this.danio = enemigo;
        this.vida -= this.danio;
        return this.vida;
    }
}

export class Monstruo {
    constructor(nombre, danio) {
        this.nombre = nombre;
        this.danio = danio;
    }
}