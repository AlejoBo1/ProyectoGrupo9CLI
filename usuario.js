const { obtenerProyectos } = require("./proyectos");
const { setProyectoActivo, getProyectoActivo } = require("./session");

/**
 * Menú del usuario
 */
function menuUsuario(rl) {
    console.log("\n--- Menú Usuario ---");

    const activo = getProyectoActivo();
    if (activo) {
        console.log(`Proyecto activo: [${activo.clave}] ${activo.nombre}`);
    } else {
        console.log("Proyecto activo: Ninguno");
    }

    console.log("1. Listar proyectos");
    console.log("0. Volver");

    rl.question("> ", (opcion) => {
        switch (opcion) {
            case "1":
                listarYSeleccionarProyecto(rl);
                break;
            case "0":
                return;
            default:
                console.log("Opción inválida");
                menuUsuario(rl);
        }
    });
}

/**
 * Lista proyectos y permite seleccionar uno como activo
 */
function listarYSeleccionarProyecto(rl) {
    const proyectos = obtenerProyectos();

    if (proyectos.length === 0) {
        console.log("No hay proyectos disponibles.");
        return menuUsuario(rl);
    }

    console.log("\n📋 Proyectos disponibles:");
    proyectos.forEach((p, index) => {
        console.log(`${index + 1}. [${p.clave}] ${p.nombre}`);
    });

    rl.question("\nSelecciona el ID del proyecto: ", (id) => {
        const index = parseInt(id) - 1;

        // Validación de ID
        if (isNaN(index) || index < 0 || index >= proyectos.length) {
            console.log("❌ ID inválido. El proyecto activo no se modificó.");
            return menuUsuario(rl);
        }

        const proyectoSeleccionado = proyectos[index];
        setProyectoActivo(proyectoSeleccionado);

        console.log(`✅ Proyecto activo: [${proyectoSeleccionado.clave}] ${proyectoSeleccionado.nombre}`);
        menuUsuario(rl);
    });
}

module.exports = {
    menuUsuario
};