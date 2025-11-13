import { BIDImensional } from "../Interfaces/BIDImensional";

export class Circulo implements BIDImensional {
    
    private radio:number;

    constructor(radio) {
        this.radio = radio;
    };

    getArea(): number {
        let a = Math.PI * Math.pow(this.radio, 2);
        return a;
    };

    pintarInfo(): void {
        console.log("La figura es un circulo y su radio es de: " + this.radio + "cm.");
    }
};

/* let c = new Circulo(8);
console.log("--- AREA ---");
console.log(c.getArea() + "cm²");
c.pintarInfo(); */