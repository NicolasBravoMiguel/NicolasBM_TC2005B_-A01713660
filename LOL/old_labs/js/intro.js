// consola (log, info, warn, error, assert)
console.log("Hola mundo");
console.info("Creado en el 2009");
console.warn("Es adictivo");
console.error("Los tanques no deben de ir atras");

// operador de comparrion de tipo y valor
console.assert(1 === true);

// operador de comparrion de valores
console.assert(1== true);

//------------------- Variables, constantes ----------------------

// Forma antigua de declarar variables. Tienen mayor alcanzce por lo que no se recomienda su uso
var perrsonaje1 = "Gwen";

// Forma nueva de declarar variables. La variable solo vice dentro del ambito donde se declara
let personaje2 = "Mordekaiser";

const precioSkin = 300;

// alcance de las variabeles

{
    var personaje3 = "Yone";
    let personaje4 = "Riven";

}

console.log(personaje3);
// console.log(personaje4); --- IGNORE  que no llega por su alcanze

//--------------------------- alert, prompt, confirm -------------------------
alert("No jueges este juego porfavor");
const personajeFavorito = prompt("¿Cual es tu personaje favorito?");
console.info("personaje favorito: " + personajeFavorito);

const hoyHayJuego = confirm("¿Hoy hay juego?");
if(hoyHayJuego){
    console.warn("A jugar!");
}
else{
    console.infor(".....");
}


// --------------------------- Funciones Tradicionales -------------------------

function descargar () {
    window.location.herf = "https://www.leagueoflegends.com/es-mx/download/";
}

if (hoyHayJuego) {
    descargar();
}
else{
    console.info("Buen dia");
}

// funciones moderadas

() => {}

docuemto.getElementById("botonDesistalar").onclick = () => {}
    alert("jojojo no se puede desinstalar el juego");


const iniciarPartida = () => {
    alert("Iniciar partida!");
}

iniciarPartida();

// ------------------------------- Arreglos -----------------------------


const personajes = ["Fizz"];

const arreglo2 = new Array();

personajes.push("Irelia");
personajes[10] = "Leona";

// Arreglos asociativos

personajes["hola"] = "Lux";

// Recorrdio tradicional de los arreglos

for(let i = 0; i < personajes.length; i++){
    console.log(personajes[i]);
}

// Recorridos alternativos de los arreglos

for(let personaje of personajes){
    console.log(personaje);
}

// Objetos

const ecoDeLuden = {
    nombre: " Eco de Luden",
    color: " Morado",
    daño: 100
};

console.log(ecoDeLuden);


