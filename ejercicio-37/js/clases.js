// Clases
export class Fabrica {
    constructor(nombre) {
        this.nombre = nombre;
    }
    crearRobot(nombreRobot) {
        const miRobot = new Robot(nombreRobot);
        return miRobot;
    }
}

class Robot {
    nombrarFabrica(miFabrica) {
        return `Fui creado por ${miFabrica}`;
    }
}