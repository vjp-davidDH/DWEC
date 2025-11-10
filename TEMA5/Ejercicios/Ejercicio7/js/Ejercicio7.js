// Ejercicio 7
function enviarTarea() {
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const estado = document.getElementById("estado").value;

    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, descripcion, estado })
    })
        .then(res => {
            if (res.ok) {
                alert("Tarea creada correctamente");
            } else {
                res.text().then(text => alert("Se ha producido un error: " + text));
            }
        });
}
