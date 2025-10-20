let discoMusica = {
    titulo: "El mejor de todos los tiempos",
    autor: "David Domínguez Hinjos",
    añoPublicacion: 2006,
    numVentas: 45,
    getInfo: function getInfo() {
        console.log("--- DISCO DE MUSICA ---");
        console.log("EL título del disco es: " + this.titulo);
        console.log("EL autor del disco es: " + this.autor);
        console.log("El año de publicación del disco es: " + this.añoPublicacion);
        console.log("El número de ventas del disco son: " + this.numVentas);
    }
};

let calleCiudad = {
    nombre: "Los Bueyes",
    longitud: "3541",
    establecimientos: ["La casa de la cultura", "Bar-Restaurante Los Bueyes", "DIGI"],
    getInfo: function getInfo() {
        console.log("--- CALLE DE LA CIUDAD ---");
        console.log("EL nombre de la ciudad es: " + this.nombre);
        console.log("La longitud de la ciudad es de: " + this.longitud + " metros");
        console.log("Los establecimientos de la ciudad son: ");
        for(let i = 0; i < this.establecimientos.length;i++) {
            console.log( (i + 1) + ". - " + this.establecimientos[i]);
        }
    }
};

let coche = {
    modelo: "Q8",
    dueño: {
        nombre: "Cristiano Ronaldo",
        edad: 41
    },
    marca: {
        nombre: "Audi",
        añoCreacion: 2018
    },
    getInfo: function getInfo() {
        console.log("--- COCHE ---");
        console.log("EL nombre del dueño es: " + this.dueño.nombre);
        console.log("La edad del dueño es: " + this.dueño.edad);
        console.log("La marca del coche es: " + this.marca.nombre);
        console.log("El modelo del coche es: " + this.modelo);
        console.log("El año de creación del coche es el: " + this.marca.añoCreacion);
    }
};

let obraTeatro = {
    titulo: "El Cascanueces",
    fechaEstreno: "20/11/2024",
    directorObraTeatro: {
        nombre: "Juan",
        apellidos: "Rodríguez Álvarez",
        añoNac: 1987,
        listaObras: ["El Cascanueces", "El Rey León", "Caperucita Roja"]
    },
    listaActores: [{
        nombre: "David",
        edad: 18,
        numRespresentaciones: 5,
    },
    {
        nombre: "Brayan",
        edad: 26,
        numRespresentaciones: 15,
    },
    {
        nombre: "Paula",
        edad: 20,
        numRespresentaciones: 3,
    }],
    getInfo: function getInfo() {
        console.log("--- OBRA DE TEATRO ---");
        console.log("El título de la obra es: " + this.titulo);
        console.log("La fecha de estreno de la obra es: " + this.fechaEstreno);
        console.log("El director de la obra es: " + this.directorObraTeatro.nombre + " " +this.directorObraTeatro.apellidos + " y nació en el: " + this.directorObraTeatro.añoNac);
        console.log("Algunas de sus obras más famosas son: ");
        for(let i = 0; i < this.directorObraTeatro.listaObras.length; i++) {
            console.log( (i + 1) + ". - " + this.directorObraTeatro.listaObras[i]);
        };
        console.log("La lista de los actores que representan la obra es la siguiente: ");
        for(let i = 0; i < this.listaActores.length; i++) {
            console.log("- " + this.listaActores[i].nombre + ", tiene: " + this.listaActores[i].edad + " años, y ha respresentado la obra: " + this.listaActores[i].numRespresentaciones + " veces.");
        };
    }
}

discoMusica.getInfo();
console.log("");
calleCiudad.getInfo();
console.log("");
coche.getInfo();
console.log("");
obraTeatro.getInfo();