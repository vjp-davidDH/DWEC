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
    let cadenaDevuelta = "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    for (let i = 0; i < persona.trabajos.length; i++) {
        cadenaDevuelta += "\n-" + persona.trabajos[i].descripcion + " --> " + persona.trabajos[i].duracion;
    }
    return cadenaDevuelta;
    }
};
console.log(persona.getInfo());