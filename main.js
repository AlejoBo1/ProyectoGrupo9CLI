const readline = require('readline');
const { menuAdmin } = require("./admin");

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
            menuAdmin(rl);
        } else {
            console.log("Rol usuario en construcción 🚧");
            seleccionarRol();
        }
    });
}

console.log("Grupo 9 - Gestor de Proyectos CLI");
seleccionarRol();