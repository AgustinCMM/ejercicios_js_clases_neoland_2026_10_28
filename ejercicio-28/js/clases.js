// Clases
export class Estudiante {
    constructor(nombre, curso) {
        this.nombre = nombre;
        this.curso = curso;
    }
    presentarse() {
        console.log(`Mi nombre es ${this.nombre} y mi curso es ${this.curso}`)
    }
}