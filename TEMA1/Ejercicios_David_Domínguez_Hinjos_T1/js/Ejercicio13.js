const array = [3, 7, 2, 5, 3, 1, 7, 5, 2, 6];
let arraySinRepetidos = [];
let arrayConRepetidos = [];

function sacarRepetidos(array) {
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (!arraySinRepetidos.includes(num)) {
            arraySinRepetidos.push(num);
        }
        else {
            arrayConRepetidos.push(num);
        }
    }
    console.log("Los números repetidos son: " + arrayConRepetidos);
    
}

sacarRepetidos(array);