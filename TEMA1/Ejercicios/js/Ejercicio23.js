const arrayValores = ["t", 4, 89, "asd", true];

function comprobarTipo() {
    arrayValores.forEach(valor => {
        if (typeof valor === "number") {
            console.log(valor);
        }
    })
}

function funcionRest(arg1, arg2, ...restoArgs) {
    console.log("El primero argumento es:" + arg1);
    console.log("El segundo argumento es:" + arg2);
    console.log("El resto de argumentos son:" + restoArgs);
}

function mostrarMayor() {
    let numeros = arrayValores.filter(valor => typeof valor === "number")
    console.log(numeros.reduce((max, valor) => valor > max ? valor : max));
}

funcionRest(...arrayValores);
comprobarTipo();
mostrarMayor();