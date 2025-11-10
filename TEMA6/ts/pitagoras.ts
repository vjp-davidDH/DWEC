class Punto2D {
    private _num1: number;
    private _num2: number;

    constructor(num1: number, num2: number) {
        this._num1 = num1;
        this._num2 = num2;
    }

    public get num1(): number {
        return this._num1;
    }

    public set num1(value: number) {
        this._num1 = value;
    }

    public get num2(): number {
        return this._num2;
    }

    public set num2(value: number) {
        this._num2 = value;
    }

    public toString(): string {
        return `Punto a pintar en las coordenadas: (${this._num1}, ${this._num2})`;
    }
}

let punto1 = new Punto2D(2,3);
let punto2 = new Punto2D(5,8);

let pitagoras: (obj1:Punto2D, obj2:Punto2D) => number;

pitagoras = (obj1, obj2) => {
    let x = obj2.num1 - obj1.num1;
    let y = obj2.num2 - obj1.num2;
    return Math.sqrt(x*x + y*y);
}

console.log(pitagoras(punto1, punto2));
