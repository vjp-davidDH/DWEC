document.getElementById("btn").addEventListener("click", () => {
    let info = new XMLHttpRequest();
    info.open("GET", "Ejercicio4.json", true);

    info.onload = () => {
        let data = JSON.parse(info.responseText);
        let filas = "";

        data.results.bindings.forEach(item => {
            filas += `<tr>
                        <td style="background-color: rgb(209, 255, 240); border: solid 1px black;">${item.rdfs_label?.value || " ----- "}</td>
                        <td style="border: solid 1px black;">${item.rdfs_label?.value || " ----- "}</td>
                        <td style="border: solid 1px black;">${item.schema_url?.value || " ----- "}</td>
                        <td style="border: solid 1px black;">${item.schema_address_streetAddress?.value || " ----- "}</td>
                        <td style="border: solid 1px black;">${item.om_capacidadPersonas?.value || " ----- "}</td>
                      </tr>`;
        });

        document.querySelector("table tbody").innerHTML = filas;
    };

    info.send();
});

