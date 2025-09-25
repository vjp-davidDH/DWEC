document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let cadena1 = document.querySelector('#cadena1').value;
    let cadena2 = document.querySelector('#cadena2').value;
    console.log(cadena1);
    console.log(cadena2);
    cadenaMasCorta(cadena1, cadena2);
});

function cadenaMasCorta(cadena1, cadena2) {
    if (typeof cadena1 === "string" && typeof cadena2 === "string") {
        if (cadena1.length > cadena2.length) {
            console.log("La mas corta es: " + cadena2);
        }
        else {
            console.log("La mas corta es: " + cadena1);
        }
    }
    else {
        alert("No has introducido un String");
    }
}