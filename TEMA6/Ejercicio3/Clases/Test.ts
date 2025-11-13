import { BIDImensional } from "../Interfaces/BIDImensional";
import { Circulo } from "../Clases/Circulo";
import { Rectangulo } from "../Clases/Rectangulo";
import { Triangulo } from "../Clases/Triangulo";

const figuras: BIDImensional[] = [];

figuras.push(new Circulo(4));
figuras.push(new Rectangulo(5, 8));
figuras.push(new Triangulo(12, 30));

function pintarInfoFiguras(figuras: BIDImensional[]): void {
    figuras.forEach(f => {
        f.pintarInfo();
        console.log("--- AREA ---");
        console.log(f.getArea() + "cm²");
    });
};

pintarInfoFiguras(figuras);