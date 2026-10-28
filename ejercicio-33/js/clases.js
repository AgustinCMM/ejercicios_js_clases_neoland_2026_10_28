// Clases
export class Gerrero {
    atacar() {
        return "Espadazo";
    }
}

export class Mago {
    atacar() {
        return "Bola de fuego";
    }
}

export class Batalla {
    iniciarPelea(luchador1, luchador2) {
        this.luchador1 = luchador1; 
        this.luchador2 = luchador2; 

        return `El luchador 1 atacó con ${this.luchador1} y el luchador 2 respondió con ${this.luchador2}`;
    }
}