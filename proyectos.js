const fs = require("fs");
const path = "./data.json";

/**
 * Lee los proyectos desde el archivo JSON -- que luego se pasará a una base de datos en SQLlite
 */
function obtenerProyectos() {
    const data = JSON.parse(fs.readFileSync(path, "utf-8"));
    return data.proyectos;
}

function obtenerProyectos() {
    const data = JSON.parse(fs.readFileSync(path, "utf-8"));
    return data.proyectos;
}

/**
 * Guarda un nuevo proyecto si la clave es válida y única
 */
function crearProyecto(nombre, clave, descripcion) {
    const data = JSON.parse(fs.readFileSync(path, "utf-8"));

    // Validar clave: 2–10 caracteres alfanuméricos
    const regexClave = /^[a-zA-Z0-9]{2,10}$/;
    if (!regexClave.test(clave)) {
        return { ok: false, mensaje: "Clave inválida. Debe ser alfanumérica (2–10 caracteres)." };
    }

    // Validar clave única
    const existe = data.proyectos.find(p => p.clave === clave);
    if (existe) {
        return { ok: false, mensaje: "La clave ya existe. Usa otra." };
    }

    // Crear proyecto
    const nuevoProyecto = {
        nombre,
        clave,
        descripcion
    };

    data.proyectos.push(nuevoProyecto);
    fs.writeFileSync(path, JSON.stringify(data, null, 2));

    return { ok: true, mensaje: "Proyecto creado exitosamente." };
}

module.exports = {
    crearProyecto,
    obtenerProyectos
};