

// -------------------- Caso 1 --------------------

const numero = prompt ("Ingresa el numero que deseas evaluar");
for (let i = 1; i <= numero; i++) {
    document.write(i + " — Cuadrado: " + (i*i) + " — Cubo: " + (i*i*i) + "<br>");
}

// --------------------- Caso 2 --------------------

let numero1 = Math.floor(Math.random() * 10) + 1;
let numero2 = Math.floor(Math.random() * 10 ) + 1;

const tiempoInicio = Date.now();

const respuesta = parseInt(prompt(`¿Cuánto es ${numero1} + ${numero2}?`));

const tiempoFinal = Date.now();

const TiempoTotal = tiempoFinal - tiempoInicio;
console.log("Tiempo total:" + TiempoTotal);


if (respuesta == (numero1 + numero2)) {
    document.write("Correcto<br>");
} else {
    document.write("Incorrecto<br>");
}

document.write("El timempo transcurrido para responde fue de: " + TiempoTotal + "milisegundos")

//------------------- Caso 3 --------------------

function contador(arreglo){
    let negativos = 0;
    let cero = 0;
    let positivos = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] < 0 ) {
            negativos++;
        } else if (arreglo[i] === 0) {
            cero++;
        } else {
            positivos++;
        }
    }

    return {
        negativos : negativos,
        cero : cero,
        positivos : positivos
    };
}

// ------------------ Caso 4 ----------------------

function promedio (matriz) {
    const resultado = [];

    for(let i = 0; i < matriz.length; i++){
        let sum = 0;
        
        for (let n = 0; n < matirz[i].length; n++) {
            sum += martiz[i][n];
        }

        const promedio = suma / matriz[i].length;
        resultado.push(promedio);
    }
    
    return resultado;

}

// ------------------- Caso 5 ----------------------



