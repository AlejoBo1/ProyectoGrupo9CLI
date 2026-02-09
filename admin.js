const { crearProyecto, obtenerProyectos } = require("./proyectos");

/**
 * Menú del administrador
 */
function menuAdmin(rl) {
    console.log("\n--- Menú Administrador ---");
    console.log("1. Crear proyecto");
    console.log("2. Listar proyectos");
    console.log("0. Volver");

    rl.question("> ", (opcion) => {
        switch (opcion) {
            case "1":
                crearProyectoCLI(rl);
                break;

            case "2":
                listarProyectosCLI(rl);
                break;

            case "0":
                return;

            default:
                console.log("Opción inválida.");
                menuAdmin(rl);
        }
    });
}

/**
 * Flujo para crear proyecto desde CLI
 */
function crearProyectoCLI(rl) {
    rl.question("Nombre del proyecto: ", (nombre) => {
        rl.question("Clave del proyecto: ", (clave) => {
            rl.question("Descripción: ", (descripcion) => {

                const resultado = crearProyecto(nombre, clave, descripcion);
                console.log(resultado.mensaje);

                menuAdmin(rl);
            });
        });
    });
}

/**
 * Listar proyectos existentes
 */
function listarProyectosCLI(rl) {
    const proyectos = obtenerProyectos();

    console.log("\n📋 Proyectos:");
    if (proyectos.length === 0) {
        console.log("No hay proyectos registrados.");
    } else {
        proyectos.forEach((p, index) => {
            console.log(`${index + 1}. [${p.clave}] ${p.nombre} - ${p.descripcion}`);
        });
    }

    menuAdmin(rl);
}

module.exports = {
    menuAdmin
};
