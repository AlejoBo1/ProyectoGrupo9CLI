const { crearProyecto, obtenerProyectos } = require("./proyectos");

/**
 * Menú del administrador
 */
function menuAdmin(rl, volverAlMenuPrincipal) {
    console.log("\n--- Menú Administrador ---");
    console.log("1. Crear proyecto");
    console.log("2. Listar proyectos");
    console.log("0. Volver");

    rl.question("> ", (opcion) => {
        switch (opcion) {
            case "1":
                crearProyectoCLI(rl, volverAlMenuPrincipal);
                break;

            case "2":
                listarProyectosCLI(rl, volverAlMenuPrincipal);
                break;

            case "0":
                volverAlMenuPrincipal(); 
                break;

            default:
                console.log("Opción inválida.");
                menuAdmin(rl, volverAlMenuPrincipal);
        }
    });
}

/**
 * Flujo para crear proyecto desde CLI
 */
function crearProyectoCLI(rl,volver) {
    rl.question("Nombre del proyecto: ", (nombre) => {
        rl.question("Clave del proyecto: ", (clave) => {
            rl.question("Descripción: ", (descripcion) => {

                const resultado = crearProyecto(nombre, clave, descripcion);
                console.log(resultado.mensaje);

                menuAdmin(rl,volver);
            });
        });
    });
}

/**
 * Listar proyectos existentes
 */
function listarProyectosCLI(rl,volverAlMenuPrincipal) {
    const proyectos = obtenerProyectos();

    console.log("\n📋 Proyectos:");
    if (proyectos.length === 0) {
        console.log("No hay proyectos registrados.");
    } else {
        proyectos.forEach((p, index) => {
            console.log(`${index + 1}. [${p.clave}] ${p.nombre} - ${p.descripcion}`);
        });
    }

    menuAdmin(rl, volverAlMenuPrincipal);
}

module.exports = {
    menuAdmin
};
