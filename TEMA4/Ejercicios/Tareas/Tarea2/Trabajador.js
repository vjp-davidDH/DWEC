export class Trabajador {
    constructor(nombre, numHorasSemanales, salarioPorHora) {
        this.nombre = nombre;
        this.numHorasSemanales = numHorasSemanales;
        this.salarioPorHora = salarioPorHora
    }

    getSaldoSemanal() {
        return this.salarioPorHora * this.numHorasSemanales;
    }

    pintarInfo() {
        console.log("El nombre del trabajador es: " + this.nombre);
        console.log("El número de horas semanales son de: " + this.numHorasSemanales);
        console.log("El trabajador cobra a esas horas: " + this.salarioPorHora + "€");
        console.log("El salario que tiene a la semana el trabajador es de: " + this.getSaldoSemanal);
    }
}
