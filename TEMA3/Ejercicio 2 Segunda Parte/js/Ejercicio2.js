let cuatro = document.querySelectorAll(".linkNormal");
let cinco = document.querySelector(".linkNormal[title^=Spider]");
let seis = document.querySelector(".linkNormal[title^=Spider] + a")
let ocho = document.querySelector("a[title=Spiderman]");

//Ejercicio 4
alert(cuatro[1]);
//Ejercicio 5
alert(cinco.nodeType);
alert(cinco.innerHTML);
//Ejercicio 6
alert(seis);
//Ejercicio 7 (reciclo del 4)
for (let i = 0; i < cuatro.length; i++) {
    alert(cuatro[i].getAttribute("title"));
};
//Ejercicio 8
alert("Anterior: " + ocho.previousElementSibling);
alert("Posterior: " + ocho.nextElementSibling);