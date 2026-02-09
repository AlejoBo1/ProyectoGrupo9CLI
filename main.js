const readline = require('readline');
const { menuAdmin } = require("./admin");
const { menuUsuario } = require("./usuario");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Muestra el menú inicial y permite seleccionar el rol, se repite hasta que el usuario ingrese una opción válida.

function seleccionarRol() {
    console.log("\n¿Cómo deseas ingresar?");
    console.log("1. Administrador");
    console.log("2. Usuario");

    rl.question("> ", (opcion) => {
        if (opcion === "1") {
            menuAdmin(rl,seleccionarRol);
        } else if (opcion === "2") {
            menuUsuario(rl,seleccionarRol);
        } else {
            console.log("Opción inválida");
            seleccionarRol();
        }
    });
}

console.log("Grupo 9 - Gestor de Proyectos CLI");
seleccionarRol();