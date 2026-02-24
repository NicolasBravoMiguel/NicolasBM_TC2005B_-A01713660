html = `

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 06 - JavaScript</title>
    <link rel="stylesheet" href="lab06css.css">
</head>
<body>
    <div class="container">
        <h1>Lab 06 - Crea tu contraseña</h1>
        <form>
            <div class="input-group">
                <input type="password" id="contraseña" placeholder="Ingresa tu contraseña">
            </div>
            <div class="input-group">
                <input type="password" id="confirmarContraseña" placeholder="Confirma tu contraseña">
            </div>

            <div class="validacion" id="barraDeValidacion"></div>

            <div class="requerimientos">
                <p id="longitud" class="invalido">✔ Longitud mínima: 8 caracteres</p>
                <p id="mayuscula" class="invalido">✔ Al menos una letra mayúscula</p>
                <p id="minuscula" class="invalido">✔ Al menos una letra minúscula</p>
                <p id="numero" class="invalido">✔ Al menos un número</p>
                <p id="simbolo" class="invalido">✔ Al menos un carácter especial</p>
            </div>

            <p class="resultado" id="mensajeDelResultado"></p>

            <button type="submit" id="validar">Crear cuenta</button>
        </form>
    </div>

    <script>
        const contraseña = document.getElementById("contraseña");
        const confirmarContraseña = document.getElementById("confirmarContraseña");
        const reqLongitud = document.getElementById("longitud");
        const reqMayuscula = document.getElementById("mayuscula");
        const reqMinuscula = document.getElementById("minuscula");
        const reqNumero = document.getElementById("numero");
        const reqSimbolo = document.getElementById("simbolo");
        const barraDeValidacion = document.getElementById("barraDeValidacion");
        const mensajeDelResultado = document.getElementById("mensajeDelResultado");

        contraseña.addEventListener("input", validarContraseña);
        confirmarContraseña.addEventListener("input", checarCoincidencia);

        function validarContraseña() {
            const valor = contraseña.value;
            let fuerza = 0;

            // Verificar longitud mínima
            if (valor.length >= 8) {
                reqLongitud.className = "valido";
                fuerza++;
            } else {
                reqLongitud.className = "invalido";
            }

            // Verificar mayúscula
            if (/[A-Z]/.test(valor)) {
                reqMayuscula.className = "valido";
                fuerza++;
            } else {
                reqMayuscula.className = "invalido";
            }

            // Verificar minúscula
            if (/[a-z]/.test(valor)) {
                reqMinuscula.className = "valido";
                fuerza++;
            } else {
                reqMinuscula.className = "invalido";
            }

            // Verificar número
            if (/[0-9]/.test(valor)) {
                reqNumero.className = "valido";
                fuerza++;
            } else {
                reqNumero.className = "invalido";
            }

            // Verificar símbolo especial
            if (/[^A-Za-z0-9]/.test(valor)) {
                reqSimbolo.className = "valido";
                fuerza++;
            } else {
                reqSimbolo.className = "invalido";
            }

            actualizarFuerza(fuerza);
            checarCoincidencia();
        }

        function actualizarFuerza(nivel) {
            if (nivel === 0) {
                barraDeValidacion.style.background = "transparent";
                barraDeValidacion.style.width = "0%";
            } else if (nivel <= 2) {
                barraDeValidacion.style.background = "red";
                barraDeValidacion.style.width = "33%";
            } else if (nivel <= 4) {
                barraDeValidacion.style.background = "orange";
                barraDeValidacion.style.width = "66%";
            } else {
                barraDeValidacion.style.background = "green";
                barraDeValidacion.style.width = "100%";
            }
        }

        function checarCoincidencia() {
            if (confirmarContraseña.value === "") {
                mensajeDelResultado.textContent = "";
                return;
            }
            if (contraseña.value === confirmarContraseña.value) {
                mensajeDelResultado.textContent = "✔ Las contraseñas coinciden";
                mensajeDelResultado.style.color = "green";
            } else {
                mensajeDelResultado.textContent = "✖ Las contraseñas no coinciden";
                mensajeDelResultado.style.color = "red";
            }
        }
    </script>
</body>
</html>
   

`;



const http = require('http');

const server = http.createServer((request, response) => {  
//    console.log(request);  
//    console.log(response);
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});

server.listen(3000);