let elecciones = ['piedra', 'papel', 'tijeras'];


function cpuEleccion() {
    const randomIndex = Math.floor(Math.random() * elecciones.length);
    return elecciones[randomIndex];
}

function juego(eleccionJugador){
    const cpu = cpuEleccion();
    let resultado = "";

    if(eleccionJugador === cpu){
        resultado = 'Empataste';
    }
    else if((eleccionJugador == 'piedra' && cpu == 'tijera') || (eleccionJugador == 'papel' && cpu == 'piedra') || (eleccionJugador == 'tijera' && cpu == 'papel')){
        resultado = 'Ganasteeee!!!'
    }
    else{
        resultado = 'Perdiste :('
    }
    document.getElementById("resultado").innerHTML = `
    Tú elegiste: ${eleccionJugador}<br>
    La computadora eligió: ${cpu}<br>
    Resultado: ${resultado}`;
}


document.getElementById("piedra").addEventListener("click", () => juego("piedra"));
document.getElementById("papel").addEventListener("click", () => juego("papel"));
document.getElementById("tijeras").addEventListener("click", () => juego("tijeras"));