// Ejercicio 2
fetch("http://localhost:3000/tasks")
    .then(res => res.json())
    .then(data => {
        const contenedor = document.getElementById("tareas");
        data.forEach(tarea => {
            contenedor.innerHTML += `<p>${tarea.titulo} - ${tarea.estado}<br>${tarea.descripcion}</p>`;
        });
    });
