import { Trabajador } from "./Trabajador.js";

class Restaurante{
    constructor(nombre) {
        this.nombre = nombre
        this.trabajadores = []
    }

    añadirTrabajador(trabajador) {
        this.trabajadores.push(trabajador)
    }

    getPagosSemanales() {
        return this.trabajadores.reduce((acumulador, trabajador) => {
            return acumulador + trabajador.getSaldoSemanal()
        }, 0)
    }

    pintarInfo() {
        console.log("El nombre del restaurante es: " + this.nombre.toUpperCase());
        console.log("El pago mensual que tiene que hacer el restaurante es de: " + this.getPagosSemanales() + "€");
        console.log("Los trabajadores son:");
        for (let i = 0; i < this.trabajadores.length; i++) {
            console.log(" - " + this.trabajadores[i].nombre + " cobra a la semana un salario de " + this.trabajadores[i].getSaldoSemanal() + "€.");
        }
        
    }
}

let restaurante = new Restaurante("La taperia");
console.log("--- INFORMACIÓN ANTES DE AÑADIR TRABAJDORES ---");
restaurante.pintarInfo()
restaurante.añadirTrabajador(new Trabajador("Pepe", 40, 10))
restaurante.añadirTrabajador(new Trabajador("Laura", 35, 15))
restaurante.añadirTrabajador(new Trabajador("Marcos", 20, 10))
console.log("--- INFORMACIÓN DESPUÉS DE AÑADIR TRABAJDORES ---");
restaurante.pintarInfo()
console.log("Mantener a los trabajadores del restaurante cuesta: " + restaurante.getPagosSemanales() + "€");
