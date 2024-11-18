// Función para mostrar el mensaje de bienvenida y solicitar el nombre del usuario
function mostrarMensajeBienvenida() {
    alert("Bienvenido a la página principal");
    
    const nombre = prompt("Por favor, ingresa tu nombre para continuar:");
    
    if (nombre) {
        document.getElementById("saludo").textContent = "Hola, " + nombre + "! Bienvenido a la página principal.";
    } else {
        document.getElementById("saludo").textContent = "Hola! Bienvenido a la página principal.";
    }
}

// Función para mostrar mensaje de bienvenida y solicitar edad
function mostrarMensajeBienvenidaGaleria() {
    alert("Bienvenido a la galería de imágenes");
    
    const edad = prompt("¿Cuál es tu edad?");
    const mensajeEdad = document.getElementById("mensajeEdad");

    if (edad !== null && edad !== "") {
        if (parseInt(edad) >= 20) {
            mensajeEdad.textContent = "Eres mayor de 20 años.";
        } else {
            mensajeEdad.textContent = "Eres menor de 20 años.";
        }
    } else {
        mensajeEdad.textContent = "No ingresaste una edad válida.";
    }
}


function cambiarImagen(imgElement, newSrc) {
    imgElement.src = newSrc;
}

// Funciones para PAGINA3
function calcularOperacion(operacion) {
    let num1, num2, resultado;
    switch (operacion) {
        case 'multiplicacion':
            num1 = parseFloat(prompt("Ingrese el primer número:"));
            num2 = parseFloat(prompt("Ingrese el segundo número:"));
            resultado = num1 * num2;
            break;
        case 'exponente':
            num1 = parseFloat(prompt("Ingrese el número:"));
            resultado = Math.pow(num1, 2);
            break;
        case 'resta':
            num1 = parseFloat(prompt("Ingrese el primer número:"));
            num2 = parseFloat(prompt("Ingrese el segundo número:"));
            resultado = num1 - num2;
            break;
    }
    alert("El resultado es: " + resultado);
}
