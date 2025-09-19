let cadena = prompt("Introduce una cadena:");

function ejercicio(string) {
    console.log(string.length);
    console.log(string.match(/[aeiou]/gi));
    console.log(string.startsWith("A"));
    }
ejercicio(cadena);