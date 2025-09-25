let cadena = prompt("Introduce una cadena: ");
for (let letra of cadena) {
    if (letra.match(/[aeiou]/gi)) {
        console.log("Vocal:" + letra);
    }
    else {
        console.log("Consonante:" + letra);
    }
}