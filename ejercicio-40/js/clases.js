// Clases
export class BandaMusical {
    constructor(integrantes) {
        this.integrantes = integrantes;
    }
    agregarMusico(musico) {
        this.integrantes.push(musico);
    }
    darConcierto() {
        this.integrantes.forEach((musico)=> {
            console.log(musico.tocar());
        });
    }
}

export class Guitarrista {
    tocar() {
        return "Guitarra sonando";
    }
}
export class Baterista {
    tocar() {
        return "Batería sonando";
    }
}
export class Cantante {
    tocar() {
        return "Voz sonando";
    }
}