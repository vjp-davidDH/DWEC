import { Ciclomotor } from './Ciclomotor.js';

class Motocross extends Ciclomotor {
    constructor(marca, aceleracion, desaceleracion) {
        super(marca, aceleracion, desaceleracion);
        this.numRuedas = 2;
        this.velocidadMaxima = 90;
        this.velocidadActual = 0;
        this.encendida = false;
        this.marchaActual = 0;
    }

    arrancar() {
        console.log("Se está levantando la pata de cabra");
        super.arrancar();
    }

    acelerar() {
        super.acelerar();
        if (this.velocidadActual > 30) {
            this.marchaActual = 3;
        } else if (this.velocidadActual > 10) {
            this.marchaActual = 2;
        } else if (this.velocidadActual > 0) {
            this.marchaActual = 1;
        } else {
            this.marchaActual = 0;
        }
    }

    frenar() {
        super.frenar();
        if (this.velocidadActual <= 30) {
            this.marchaActual = 2;
        } else if (this.velocidadActual <= 10) {
            this.marchaActual = 1;
        } else if (this.velocidadActual <= 0) {
            this.marchaActual = 0;
        }
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log("La marcha actual de la Motocross es: " + this.marchaActual);
    }
}

console.log("\n\nPruebas de la moto de Motocross:\n\n");

let motocross = new Motocross("Honda", 10, 5);
console.log("LA MOTO DE MOTOCROSS INCIALMENTE: ");
motocross.mostrarInfo();
console.log("LA MOTO DESPUES DE ACELERAR: ");
motocross.acelerar();
motocross.mostrarInfo();

console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR: ");
motocross.arrancar();
motocross.acelerar();
motocross.mostrarInfo();

console.log("VOLVEMOS A ACELERAR: ");
motocross.acelerar();
motocross.mostrarInfo();

console.log("FRENAMOS LA MOTO: ");
motocross.frenar();
motocross.mostrarInfo();