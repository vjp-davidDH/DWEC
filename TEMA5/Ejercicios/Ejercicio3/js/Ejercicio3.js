// Ejercicio 3
function crearTarea() {
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const estado = document.getElementById("estado").value;

    if (!titulo || !descripcion) {
        alert("Título y descripción son obligatorios");
        return;
    }

    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, descripcion, estado })
    })
        .then(res => {
            if (res.ok) {
                alert("Tarea creada correctamente");
            } else {
                res.text().then(text => alert("Error: " + text));
            }
        });
}
