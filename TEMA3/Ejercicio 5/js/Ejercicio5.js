let div = document.querySelector("div");

//Que se ejecute todo el código al recargar el DOM
window.addEventListener("DOMContentLoaded", function () {

    //Los estilos del div
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.backgroundColor = "#9e9e9e";
    div.style.color = "blue";
    div.style.border = "1px solid red";

    //Que hara cuando se redimensione la página
    window.addEventListener("resize", () => {
        div.textContent = `${window.innerWidth}, ${window.innerHeight}`;
    });

    alert("Se ha ejecutado todo.");
});