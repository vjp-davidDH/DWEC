let entrada = prompt("Introduce un número: ");
let num = Number(entrada);
let resultado = 0;
for (let i = 0; i < 2; i++) {
    entrada = prompt("Introduce un número: ");
    num = Number(entrada)
    resultado = num + num;
}

if (resultado > 100) {
    alert("Éxito.")
}
else {
    alert("Fracaso.")
}