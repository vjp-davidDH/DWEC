let info = new XMLHttpRequest();
info.open("GET", "Tarea3.json", true);
info.onload = () => {
    let data = JSON.parse(info.responseText);
    let postConId1 = data.find(item => item.id === 1);

    if (postConId1) {
        document.getElementById("users")?.addEventListener("click", () => {
            document.querySelector("div.resultado").innerHTML = "";
            data.forEach(item => {
                let titulo = item?.title || "---";
                document.querySelector("div.resultado").innerHTML += `<h2>${titulo}</h2>`;
            });
        });

        document.getElementById("coments")?.addEventListener("click", () => {
            document.querySelector("div.resultado").innerHTML = "";
            data.forEach(item => {
                let body = item?.body || "---";
                document.querySelector("div.resultado").innerHTML += `<p>${body}</p>`;
            });
        });
    } else {
        console.log("No existe ese ID");
    }
};
info.send();