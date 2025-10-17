export class Ciclomotor {
    constructor(marca, aceleracion, desaceleracion) {
        this.numRuedas = 2;
        this.velocidadMaxima = 120;
        this.velocidadActual = 0;
        this.marca = marca;
        this.aceleracion = aceleracion;
        this.desaceleracion = desaceleracion;
        this.encendida = false;
    }

    arrancar() {
        this.encendida = true;
        console.log("Se mete y gira la llave, la moto arranca.");
    };

    acelerar() {
        if (this.encendida == true) {
            if ((this.velocidadActual + this.aceleracion) < this.velocidadMaxima) {
                console.log("Acelerando la moto: ");
                this.velocidadActual = this.velocidadActual + this.aceleracion;
            }
            else {
                console.log("Has acelerado más de lo permitido y la moto se ha puesto a velocidad máxima");
                this.velocidadActual = this.velocidadMaxima;                
            };
        }
        else {
            console.log("No puedes acelerar una moto que esta apagada primero enciende la moto.");

        };
    };

    frenar() {
        if (this.velocidadActual == 0) {
            console.log("No puedo frenar mas ya que estas a 0km/h");
        }
        else {
            console.log("Frenando: ");
            this.velocidadActual = this.velocidadActual - this.desaceleracion;
        };
    };

    mostrarInfo() {
        console.log("La moto esta: " + this.encendida);
        console.log("el numero de ruedas es: " + this.numRuedas);
        console.log("La velocidad actual de la moto es: " + this.velocidadActual);
        console.log("La marca de la moto es: " + this.marca);
    };
};

let ciclomotor = new Ciclomotor("Kawasaki", 70, 20);
console.log("LA MOTO INCIALMENTE: ");
ciclomotor.mostrarInfo();
console.log("LA MOTO DESPUES DE ACELERAR: ");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR: ");
ciclomotor.arrancar();
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("VOLVEMOS A ACELERAR: ");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("FRENAMOS LA MOTO: ");
ciclomotor.frenar();
ciclomotor.mostrarInfo();