const miNombre = "Ricardo Mendoza";
let lenguajesAprendidos = 2;

const botonEnviar = document.querySelector("button");
const campoNombre = document.querySelector('input[type="text"]'); // Pesca el input de texto

botonEnviar.addEventListener("click", function(event) {
    event.preventDefault();
    
    // 2. Extraemos el texto que la persona escribió adentro
    const nombreUsuario = campoNombre.value;
    
    // 3. ¡Lo usamos en la alerta!
    alert("¡Gracias " + nombreUsuario + "! Tu mensaje ha sido enviado.");
});