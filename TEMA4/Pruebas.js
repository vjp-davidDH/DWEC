//Objeto 1 con notación JS
let obj1 = new Object();
obj1.nombre = "David";
obj1["edad"] = 18;
obj1.getInfo = function() {
    return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
};

console.log("Nombre con getInfo()");
console.log(obj1.getInfo());
console.log("Nombre con obj1.nombre");
console.log(obj1.nombre);
console.log("Nombre con obj1['nombre']");
console.log(obj1["nombre"]);

let prop1 = "nombre";
console.log("Nombre con obj1[prop] donde prop es una variable que esta inicializada con 'nombre'.");
console.log(obj1[prop1]);

//Objeto 2 con notación JSON
let obj2 = {
    nombre: "Brayan",
    edad: 28,
    getInfo: function() {
    return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    }
};

console.log("Nombre con getInfo()");
console.log(obj2.getInfo());
console.log("Nombre con obj2.nombre");
console.log(obj2.nombre);
console.log("Nombre con obj2['nombre']");
console.log(obj2["nombre"]);

let prop2 = "nombre";
console.log("Nombre con obj2[prop] donde prop es una variable que esta inicializada con 'nombre'.");
console.log(obj2[prop2]);

//Objeto 3 con notación JSOPN y con un array de trabajos
let persona = {
    nombre: "Javi",
    "edad": 20,
    trabajos: [
        {
            descripcion: "Payaso del circo",
            duracion: "2003-2005"
        },
        {
            descripcion: "Sexador de pollos",
            duracion: "2005-2019"
        }
    ],
    getInfo: function() {
    return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    }
};

console.log("Info con persona.getInfo()");
console.log(persona.getInfo());
console.log("Pintamos solo la descripcion de los productos indicandole en el indice la que quiero");
console.log(persona.trabajos[1].descripcion);