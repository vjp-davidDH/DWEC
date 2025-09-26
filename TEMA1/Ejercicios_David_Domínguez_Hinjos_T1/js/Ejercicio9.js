let platoCocina1 = {nombrePlato: "Macarrones", duracionMinutos: 30, dificultad: 6};
let platoCocina2 = {nombrePlato: "Chuleton a la brasa", duracionMinutos: 80, dificultad: 9};
let platoCocina3 = {nombrePlato: "Sopa de fideos(Jardinera)", duracionMinutos: 20, dificultad: 5};

let ingredientesPlato1 = ["Pasta (Macarrones)", "Atún", "Tomate Frito", "Aceite de Oliva Virgen extra", "Hojas de Laurel", "Sal"];
let ingredientesPlato2 = ["Carne (Chuletón)", "Sal"];
let ingredientesPlato3 = ["Pasta (Fideos)", "Sal", "Caldo", "Verduras"];

let mapaPlatos = new Map();
mapaPlatos.set(platoCocina1, ingredientesPlato1);
mapaPlatos.set(platoCocina2, ingredientesPlato2);
mapaPlatos.set(platoCocina3, ingredientesPlato3);

function leerPlatos() {
    for (const [plato, ingredientes] of mapaPlatos) {
        console.log(`${plato.nombrePlato} (Duracion: ${plato.duracionMinutos} min, Dificultad: ${plato.dificultad})`);
        console.log("Ingredientes: " + ingredientes);
        console.log("");
    }
}

leerPlatos();