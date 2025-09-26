let estudiante1 = {nombre: "David Domínguez Hinjos"};
let estudiante2 = {nombre: "Brayan Rodríguez Collado"};
let estudiante3 = {nombre: "Raúl Álvarez Martín"};
let estudiante4 = {nombre: "Elena García Peréz"};

let notasEstudiante1 = [6, 8, 5, 9, 10];
let notasEstudiante2 = [6, 6, 3, 10, 6];
let notasEstudiante3 = [1, 9, 7, 2, 8];
let notasEstudiante4 = [6, 2, 5, 6, 4];

let mapaEstudiantes = new Map();
mapaEstudiantes.set(estudiante1, notasEstudiante1);
mapaEstudiantes.set(estudiante2, notasEstudiante2);
mapaEstudiantes.set(estudiante3, notasEstudiante3);
mapaEstudiantes.set(estudiante4, notasEstudiante4);

function mediaAritmetica(...nums) {
    const media = nums.reduce((acumulado, actual) => acumulado + actual, 0) / 6;
    return media;
}

function mostraraPorMedia() {
    let medias = [mediaAritmetica(...notasEstudiante1), mediaAritmetica(...notasEstudiante2), mediaAritmetica(...notasEstudiante3), mediaAritmetica(...notasEstudiante4)];    
    medias.sort((a, b) => a - b);
    console.log("Esta son las medias ordenadas de menor a mayor: " + medias);
}

function mostrarMediaMasAlta() {
    let maxMedia = 0;
    let estudianteMax = "";
    for (const [estudiante, notas] of mapaEstudiantes) {
        const media = mediaAritmetica(...notas);
        if (media > maxMedia) {
            maxMedia = media;
            estudianteMax = estudiante.nombre;
        }
    }
    console.log(estudianteMax + " tiene la media mas alta con: " + maxMedia);
    
}

console.log(`Media de ${estudiante1.nombre}:`);
console.log(mediaAritmetica(...notasEstudiante1));
console.log(`Media de ${estudiante2.nombre}:`);
console.log(mediaAritmetica(...notasEstudiante2));
console.log(`Media de ${estudiante3.nombre}:`);
console.log(mediaAritmetica(...notasEstudiante3));
console.log(`Media de ${estudiante4.nombre}:`);
console.log(mediaAritmetica(...notasEstudiante4));
mostraraPorMedia();
mostrarMediaMasAlta();