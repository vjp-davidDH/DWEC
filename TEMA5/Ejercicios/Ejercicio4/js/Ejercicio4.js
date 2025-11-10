// Ejercicio 4
function modificarTarea() {
    const id = document.getElementById("id").value;
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const estado = document.getElementById("estado").value;

    fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, descripcion, estado })
    })
        .then(res => {
            if (res.ok) {
                alert("Tarea modificada correctamente");
            } else {
                res.text().then(text => alert("Error: " + text));
            }
        });
}
