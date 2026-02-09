console.log("Grupo 9 - Gestor de Proyectos CLI");
console.log("¿Quieres ingresar como administrador o como usuario? (admin/usuario)");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("> ", (respuesta) => { // Crear bucle para validar la entrada del usuario y admin y evitar errrores.

    const opcion = respuesta.toLowerCase().trim();

    if (opcion === "admin") {
        console.log("Has ingresado como ADMINISTRADOR");
        menuAdmin();
    } else if (opcion === "usuario") {
        console.log("Has ingresado como USUARIO");
        menuUsuario();
    } else {
        console.log("Opción no válida. Intenta de nuevo.");
        rl.close();
    }
});

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