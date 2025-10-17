let div = document.querySelector("div");
div.style.width = "267px";
div.style.height = "267px";
const colores = ["rojo", "azul", "verde", "amarillo"];

let matriz = [];

function crearBotones() {
    for (let i = 0; i < 10; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            let boton = document.createElement("button");
            boton.style.height = "25px";
            boton.style.width = "25px";
            boton.style.padding = "10px";
            div.appendChild(boton);
            matriz[i][j] = boton;
        }
    }
}

function eventosBotones() {
    
}

crearBotones();
eventosBotones();