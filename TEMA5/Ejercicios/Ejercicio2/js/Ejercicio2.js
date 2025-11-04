document.getElementById('btnCargar').addEventListener('click', cargarTareas);

async function cargarTareas() {
    const lista = document.getElementById('tareas');
    const errorElem = document.getElementById('error');
    lista.innerHTML = '';
    errorElem.textContent = '';

    try {
        const response = await fetch('http://localhost:3000/tasks');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const tareas = await response.json();

        if (tareas.length === 0) {
            lista.innerHTML = '<li>No hay tareas disponibles.</li>';
            return;
        }

        tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.textContent = `${tarea.id}: ${tarea.title}`;
            lista.appendChild(li);
        });

    } catch (error) {
        errorElem.textContent = 'Error al cargar tareas: ' + error.message;
    }
}
