class actividadControlador {
    constructor() {
      this.actividades = [
        { id: 1, nombre: 'Correr' , descripcion: 'Correr 5km'},
        { id: 2, nombre: 'Leer', descripcion: 'Leer un libro'},
      ];
    }
  
    listarActividades() {
      return { actividades: this.actividades };
    }
  
    agregarActividad(actividad) {
      const nuevaActividad = {
        id: parseInt(Date.now()), // <-- Convierte a número entero
        nombre: actividad.nombre,
        descripcion: actividad.descripcion,
      };
      this.actividades.push(nuevaActividad);
    }
  
    obtenerActividad(id) {
      return this.actividades.find(actividad => actividad.id == id);
    }
  
    actualizarActividad(id, actividad) {
      const index = this.actividades.findIndex(actividad => actividad.id == id);
      if (index !== -1) {
        this.actividades[index] = {
          id: parseInt(id),
          nombre: actividad.nombre,
          descripcion: actividad.descripcion,
        };
      }
    }
  
    eliminarActividad(id) {
      this.actividades = this.actividades.filter(actividad => actividad.id != id);
    }
  }
  
  module.exports = actividadControlador;