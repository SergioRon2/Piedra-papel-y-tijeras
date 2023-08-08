const piedraElement = document.getElementById("piedra");
const papelElement = document.getElementById("papel");
const tijerasElement = document.getElementById("tijeras");

const resultadoElement = document.getElementById("resultado");

piedraElement.addEventListener("click", () => jugar("piedra"));
papelElement.addEventListener("click", () => jugar("papel"));
tijerasElement.addEventListener("click", () => jugar("tijeras"));

function jugar(eleccionUsuario) {
    const elecciones = ["piedra", "papel", "tijeras"];
    const eleccionComputadora = elecciones[Math.floor(Math.random() * elecciones.length)];

    let resultado = "";
    if (eleccionUsuario === eleccionComputadora) {
        resultado = "Empate";
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijeras" && eleccionComputadora === "papel")
    ) {
        resultado = "Ganaste";
    } else {
        resultado = "Perdiste";
    }

    resultadoElement.textContent = `Elegiste ${eleccionUsuario}. La computadora eligió ${eleccionComputadora}. Resultado: ${resultado}`;
}
