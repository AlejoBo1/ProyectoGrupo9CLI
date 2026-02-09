const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Muestra el menú inicial y permite seleccionar el rol, se repite hasta que el usuario ingrese una opción válida.

function seleccionarRol() {
    console.log("\n¿Cómo deseas ingresar?");
    console.log("1. Administrador");
    console.log("2. Usuario");

    rl.question("> ", (respuesta) => {
        const opcion = respuesta.trim();

        switch (opcion) {
            case "1":
                console.log("Has ingresado como ADMINISTRADOR");
                menuAdmin();
                break;

            case "2":
                console.log("Has ingresado como USUARIO");
                menuUsuario();
                break;

            default:
                console.log("Opción no válida. Intenta nuevamente.");
                seleccionarRol(); // bucle lógico
        }
    });
}

function menuAdmin() { //Menu Admin
    console.log("\n--- Menú Administrador ---");
    console.log("1. Crear proyecto");
    console.log("2. Ver proyectos");
    console.log("3. Salir");

    rl.question("> ", (opcion) => {
        console.log("Funcionalidad en construcción 🚧");
        rl.close();
    });
}

function menuUsuario() { // Menu Usuario
    console.log("\n--- Menú Usuario ---");
    console.log("1. Ver proyectos asignados");
    console.log("2. Cambiar estado de tarea");
    console.log("3. Salir");

    rl.question("> ", (opcion) => {
        console.log("Funcionalidad en construcción 🚧");
        rl.close();
    });
}

console.log("Grupo 9 - Gestor de Proyectos CLI");
seleccionarRol();