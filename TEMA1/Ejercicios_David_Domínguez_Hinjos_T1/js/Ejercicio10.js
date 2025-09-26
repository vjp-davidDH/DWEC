let param1 = "hola";
let param2 = 4;

function comprobarCadenas(...cadenas) {
    let validas = [];
    for (const c of cadenas) {
        if (typeof c === "string") {
            validas.push(c);
        }
        else {
            alert("Error:")
        }
    } 
    let resultado = validas.reduce((acum, actual) => acum + actual);
    console.log(resultado.length);
}

comprobarCadenas(param1, param2);