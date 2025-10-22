document.getElementById("users").addEventListener("click", () => {
    let info = new XMLHttpRequest();
    info.open("GET", "Tarea3.json", true);

    info.onload = () => {
        let data = JSON.parse(info.responseText);
        document.querySelector("div.resultado").innerHTML = "";
        data.forEach(item => {
            let titulo = item?.title || "---";
            document.querySelector("div.resultado").innerHTML += `<h2>${titulo}</h2>`;
        });
    };
    info.send();
});
document.getElementById("coments").addEventListener("click", () => {
    let info = new XMLHttpRequest();
    info.open("GET", "Tarea3.json", true);

    info.onload = () => {
        let data = JSON.parse(info.responseText);
        document.querySelector("div.resultado").innerHTML = "";
        data.forEach(item => {
            let body = item?.body || "---";
            document.querySelector("div.resultado").innerHTML += `<p>${body}</p>`;
        });
    };
    info.send();
});