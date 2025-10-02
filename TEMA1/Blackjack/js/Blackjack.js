function crearMazo() {
    let palos = ["Corazones", "Picas", "Treboles", "Diamantes"];
    let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jota", "Reina", "Rey"];
    let mazo = [];

    for (let p of palos) {
        for (let v of cartas) {
            let valorNumerico;
            if (["Jota", "Reina", "Rey"].includes(v)) valorNumerico = 10;
            else valorNumerico = parseInt(v);
            mazo.push({ v, p, valorNumerico });
        }
    }
    return mazo;
}

function barajarMazo(mazo) {
    for (let i = mazo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
    }
    return mazo;
}


function turnoJugador(mazo) {
    let cartas = [];
    let palos = ["Corazones", "Picas", "Treboles", "Diamantes"];
    do {
        let carta = mazo.pop();
        cartas.push(carta);
        alert(`Te ha tocado: ${carta.v} de ${carta.p} valor de carta = ${carta.valorNumerico}`);
    } while (prompt("¿Quieres otra carta? (S/N)") === "S");
    return cartas;
}

function turnoMaquina(mazo, cartasJugador) {
    let cartas = [];
    for (let i = 0; i < cartasJugador.length; i++) {
        let carta = mazo.pop();
        cartas.push(carta);
        alert(`Cartas de la máquina: ${carta.v} de ${carta.p} valor de carta = ${carta.valorNumerico}`);
    }
    return cartas;
}

function calcularValorMano(cartas) {
    let total = 0;
    for (let carta of cartas) {
        total += carta.valorNumerico;
    }
    return total;
}

function blackjack() {
    console.log("Creando el mazo...");
    let mazo = barajarMazo(crearMazo());

    let cartasJugador = turnoJugador(mazo);
    let valorJugador = calcularValorMano(cartasJugador);

    if (valorJugador > 21) {
        alert("Has perdido. Te has pasado de 21.")
        alert("El resultado de tus cartas: " + valorJugador);
    }

    else if (valorJugador === 21) {
        alert("El resultado de tus cartas: " + valorJugador + ". Has ganado.");
    }

    else {
        let cartasMaquina = turnoMaquina(mazo, cartasJugador);
        let valorMaquina = calcularValorMano(cartasMaquina);
        alert("El resultado de tus cartas: " + valorJugador);
        alert("El resultado de las cartas de la máquina: " + valorMaquina);
        if (valorJugador < 21 && valorJugador > valorMaquina) {
            alert("Enorabuena. Has ganado.")
        }
        else {
            alert("Te ha ganado la máquina.")
        }
    }
}

while (prompt("Quieres jugar al Blackjack? (S/N)") === "S") {
    blackjack();
}