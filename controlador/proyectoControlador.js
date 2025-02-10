class ProyectoControlador {
    constructor() {
      this.proyectos = [
        { id: 1, nombre: 'Proyecto 1', descripcion: 'Descripción del proyecto 1' },
        { id: 2, nombre: 'Proyecto 2', descripcion: 'Descripción del proyecto 2' },
      ];
    }
  
    listarProyectos() {
      return { proyectos: this.proyectos };
    }
  
    agregarProyecto(proyecto) {
      const nuevoProyecto = {
        id: Date.now(),
        nombre: proyecto.nombre,
        descripcion: proyecto.descripcion,
      };
      this.proyectos.push(nuevoProyecto);
    }
  
    obtenerProyecto(id) {
      return this.proyectos.find(proyecto => proyecto.id == id);
    }
  
    actualizarProyecto(id, proyecto) {
      const indice = this.proyectos.findIndex(proyecto => proyecto.id == id);
      if (indice !== -1) {
        this.proyectos[indice] = {
          id: parseInt(id),
          nombre: proyecto.nombre,
          descripcion: proyecto.descripcion,
        };
      }
    }
  
    eliminarProyecto(id) {
      this.proyectos = this.proyectos.filter(proyecto => proyecto.id != id);
    }
  }
  
  module.exports = ProyectoControlador;