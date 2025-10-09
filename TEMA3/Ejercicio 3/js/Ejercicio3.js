let a = document.querySelector("a");

function cambiarATwitter(arg) {
    console.log(a.id);
    a.id = "aTwitter";
    console.log(a.id);
    console.log(a.href);
    a.href = "https://www.twitter.com";
    console.log(a.href);
    console.log(a.textContent);
    a.textContent = "Twitter";
    console.log(a.textContent);
    if (a.title) {
        console.log(a.title);
        a.title = "Ir a Twitter";
        console.log(a.title);
    }
    else {
        console.log("El nodo 'a' no tiene el atributo title");
    }
}

cambiarATwitter(a);