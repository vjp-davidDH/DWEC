document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let cadena1 = document.querySelector('#cadena1').value;
    let cadena2 = document.querySelector('#cadena2').value;
    comprobarCadenas(cadena1, cadena2);
});

function comprobarCadenas(cadena1, cadena2) {
    if (typeof cadena1 === "string" && typeof cadena2 === "string") {
        if (cadena1 === cadena2.split('').reverse().join('')) {
            console.log("La primera cadena es igual que la segunda cadena del revés");
            console.log(cadena1);
            console.log(cadena2);
        }
        else {
            console.log("La priemra cadena no es igual que la segunda cadena del revés");
        }
    }
    else {
        alert("No has introducido un String");
    }
}