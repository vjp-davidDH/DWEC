// Ejercicio 5
function eliminarTarea() {
    const id = document.getElementById("id").value;

    fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE"
    })
        .then(res => {
            if (res.ok) {
                alert("Tarea eliminada");
            } else {
                res.text().then(text => alert("Error: " + text));
            }
        });
}
