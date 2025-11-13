import { BIDImensional } from "../Interfaces/BIDImensional";

export class Triangulo implements BIDImensional {
    
    private base:number;
    private altura:number;

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    };

    getArea(): number {
        let a = (this.base * this.altura) / 2;
        return a;
    };

    pintarInfo(): void {
        console.log("La figura es un triangulo y su base es de: " + this.base + "cm y su altura es de: " + this.altura + "cm.");
    }
};
/* 
let t = new Triangulo(10, 25);
console.log("--- AREA ---");
console.log(t.getArea() + "cm²");
t.pintarInfo(); */