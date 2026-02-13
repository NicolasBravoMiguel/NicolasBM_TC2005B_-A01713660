

// -------------------- Caso 1 --------------------

const numero = prompt ("Ingresa el numero que deseas evaluar");
for (let i = 1; i <= numero; i++) {
    document.write(i + " — Cuadrado: " + (i*i) + " — Cubo: " + (i*i*i) + "<br>");
}

// --------------------- Caso 2 --------------------

let numero1 = Math.floor(Math.random() * 10) + 1;
let numero2 = Math.floor(Math.random() * 10 ) + 1;

const tiempoInicio = Date.now();
const tiempoFinal = Date.now();

const TiempoTotal = tiempoFinal - tiempoInicio;
console.log("Tiempo total:" + TiempoTotal);


if (respuesta == (numero1 + numero2)) {
    document.write("Correcto<br>");
} else {
    document.write("Incorrecto<br>");
}

//-------------------
