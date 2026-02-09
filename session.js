/**
 * Maneja el estado de la sesión actual
 */
let proyectoActivo = null;

function setProyectoActivo(proyecto) {
    proyectoActivo = proyecto;
}

function getProyectoActivo() {
    return proyectoActivo;
}

module.exports = {
    setProyectoActivo,
    getProyectoActivo
};