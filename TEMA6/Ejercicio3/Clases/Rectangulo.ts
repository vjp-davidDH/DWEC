import { BIDImensional } from "../Interfaces/BIDImensional";

export class Rectangulo implements BIDImensional {
    
    private base:number;
    private altura:number;

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    };

    getArea(): number {
        let a = this.base * this.altura;
        return a;
    };

    pintarInfo(): void {
        console.log("La figura es un rectangulo y su base es de: " + this.base + "cm y su altura es de: " + this.altura + "cm.");
    }
};

/* let r = new Rectangulo(8, 14);
console.log("--- AREA ---");
console.log(r.getArea() + "cm²");
r.pintarInfo(); */