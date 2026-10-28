// Clases
export class Dispositivo {
    constructor(energia) {
        this.energia = energia;
    }
}

export class Computadora extends Dispositivo {
    consumir() {
        return this.energia -= 10;
    }
}

export class Laptop extends Computadora {
    constructor(_energia) { // El prefijo _ indica que el parámetro se recibe, pero no se utiliza.
        super(100); // Llama al constructor padre y establece la energía heredada en 100.
    }
    consumir() {        
        return this.energia -= 5;
    }
}
