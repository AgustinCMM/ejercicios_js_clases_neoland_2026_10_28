// Clases
class Abuelo {
    dinero = 1000;
}
class Padre extends Abuelo {
    dinero = 500;
}
export class Hijo extends Padre {
    gastar() {
        return this.dinero;
    }
}