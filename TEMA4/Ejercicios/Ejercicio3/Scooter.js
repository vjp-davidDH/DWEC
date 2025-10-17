import { Ciclomotor } from "./Ciclomotor.js";

class Scooter extends Ciclomotor {
    constructor(marca) {
        super(marca);
        this.numRuedas = 2;
        this.velocidadMaxima = 90;
        this.velocidadActual = 0;
        this.encendida = false;
        this.aceleracion = 25;
        this.desaceleracion = 15;
    }

    arrancar() {
        console.log("Se acerca la llave y se pulsa el botón, la moto arranca.");
        super.arrancar();
    }

    acelerar() {
        super.acelerar();
    }

    frenar() {
        super.frenar();
    }

    mostrarInfo() {
        super.mostrarInfo();
    }
}
console.log("\n\nPruebas de la moto de Scooter:\n\n");
let scooter = new Scooter("Yamaha");
console.log("LA MOTO DE SCOOTER INCIALMENTE: ");
scooter.mostrarInfo();
console.log("LA MOTO DESPUES DE ACELERAR: ");
scooter.acelerar();
scooter.mostrarInfo();

console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR: ");
scooter.arrancar();
scooter.acelerar();
scooter.mostrarInfo();

console.log("VOLVEMOS A ACELERAR: ");
scooter.acelerar();
scooter.mostrarInfo();

console.log("FRENAMOS LA MOTO: ");
scooter.frenar();
scooter.mostrarInfo();