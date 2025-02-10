class HabitosControlador {
  constructor() {
    this.habitos = [
      { id: 1, nombre: 'Hacer ejercicio' },
      { id: 2, nombre: 'Leer 30 minutos' },
    ];
  }

  listarHabitos() {
    return { habitos: this.habitos };
  }

  agregarHabito(habito) {
    const nuevoHabito = {
      id: parseInt(Date.now()), // <-- Convierte a número entero
      nombre: habito.nombre,
    };
    this.habitos.push(nuevoHabito);
  }

  obtenerHabito(id) {
    return this.habitos.find(habito => habito.id == id);
  }

  actualizarHabito(id, habito) {
    const index = this.habitos.findIndex(habito => habito.id == id);
    if (index !== -1) {
      this.habitos[index] = {
        id: parseInt(id),
        nombre: habito.nombre,
      };
    }
  }

  eliminarHabito(id) {
    this.habitos = this.habitos.filter(habito => habito.id != id);
  }
}

module.exports = HabitosControlador;